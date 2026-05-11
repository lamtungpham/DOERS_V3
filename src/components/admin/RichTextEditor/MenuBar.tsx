import { Bold, Italic, Strikethrough, Underline as UnderlineIcon, Image as ImageIcon, Link as LinkIcon, Youtube as YoutubeIcon, AlignLeft, AlignCenter, AlignRight, AlignJustify, Link2, Code } from 'lucide-react';
import { useCallback, useRef, useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../firebase';
import { CustomPrompt } from './CustomPrompt';

export const MenuBar = ({ editor, showHtml, setShowHtml }: { editor: any, showHtml: boolean, setShowHtml: (val: boolean) => void }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [promptConfig, setPromptConfig] = useState<{isOpen: boolean, title: string, placeholder: string, defaultValue?: string, action: (val: string) => void}>({
    isOpen: false, title: '', placeholder: '', defaultValue: '', action: () => {}
  });

  if (!editor) {
    return null;
  }

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    event.target.value = '';

    const storageRef = ref(storage, `editor-images/${Date.now()}_${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      null,
      (error) => {
        console.error('Lỗi khi tải ảnh lên:', error);
        alert('Lỗi tải ảnh. Có thể do Security Rules của Storage chưa cấp quyền write.');
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        editor.chain().focus().setImage({ src: downloadURL }).run();
      }
    );
  };

  const addImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const addImageFromUrl = useCallback(() => {
    setPromptConfig({
      isOpen: true,
      title: 'Chèn ảnh từ URL',
      placeholder: 'https://...',
      action: (url) => {
        if (url) editor.chain().focus().setImage({ src: url }).run();
        setPromptConfig(prev => ({...prev, isOpen: false}));
      }
    });
  }, [editor]);

  const addYoutubeVideo = useCallback(() => {
    setPromptConfig({
      isOpen: true,
      title: 'Chèn video YouTube',
      placeholder: 'https://www.youtube.com/watch?v=...',
      action: (url) => {
        if (url) {
          editor.chain().focus().setYoutubeVideo({
            src: url,
            width: 640,
            height: 360,
          }).run();
        }
        setPromptConfig(prev => ({...prev, isOpen: false}));
      }
    });
  }, [editor]);

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes('link').href;
    setPromptConfig({
      isOpen: true,
      title: 'Chèn hoặc sửa Link',
      placeholder: 'https://...',
      defaultValue: previousUrl || '',
      action: (url) => {
        if (url === '') {
          editor.chain().focus().extendMarkRange('link').unsetLink().run();
        } else if (url !== null) {
          editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
        }
        setPromptConfig(prev => ({...prev, isOpen: false}));
      }
    });
  }, [editor]);

  return (
    <>
      <CustomPrompt 
        isOpen={promptConfig.isOpen}
        title={promptConfig.title}
        placeholder={promptConfig.placeholder}
        defaultValue={promptConfig.defaultValue}
        onConfirm={promptConfig.action}
        onCancel={() => setPromptConfig(prev => ({...prev, isOpen: false}))}
      />
      <div className="flex flex-wrap items-center gap-2 p-2 border-b border-gray-200 bg-gray-50 rounded-t-lg">
        <button
          type="button"
          onClick={() => setShowHtml(!showHtml)}
          className={`p-2 rounded font-bold flex items-center ${showHtml ? 'bg-brand-orange text-white' : 'text-gray-600 hover:bg-gray-200'}`}
          title="Xem/Sửa mã HTML"
        >
          <Code className="w-4 h-4 mr-1" />
          HTML
        </button>
        <div className="w-px h-6 bg-gray-300 mx-1"></div>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`p-2 rounded ${editor.isActive('bold') ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-200'}`}
          title="In đậm"
        >
          <Bold className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={`p-2 rounded ${editor.isActive('italic') ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-200'}`}
          title="In nghiêng"
        >
          <Italic className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={`p-2 rounded ${editor.isActive('strike') ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-200'}`}
          title="Gạch ngang"
        >
          <Strikethrough className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
          className={`p-2 rounded ${editor.isActive('underline') ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-200'}`}
          title="Gạch dưới"
        >
          <UnderlineIcon className="w-4 h-4" />
        </button>
        <div className="w-px h-6 bg-gray-300 mx-1"></div>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`p-2 rounded font-bold ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-200'}`}
          title="Tiêu đề 1 (H1)"
        >
          H1
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-2 rounded font-bold ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-200'}`}
          title="Tiêu đề 2 (H2)"
        >
          H2
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`p-2 rounded font-bold ${editor.isActive('heading', { level: 3 }) ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-200'}`}
          title="Tiêu đề 3 (H3)"
        >
          H3
        </button>
        <div className="w-px h-6 bg-gray-300 mx-1"></div>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={`p-2 rounded ${editor.isActive({ textAlign: 'left' }) ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-200'}`}
          title="Căn trái"
        >
          <AlignLeft className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={`p-2 rounded ${editor.isActive({ textAlign: 'center' }) ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-200'}`}
          title="Căn giữa"
        >
          <AlignCenter className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={`p-2 rounded ${editor.isActive({ textAlign: 'right' }) ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-200'}`}
          title="Căn phải"
        >
          <AlignRight className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          className={`p-2 rounded ${editor.isActive({ textAlign: 'justify' }) ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-200'}`}
          title="Căn đều"
        >
          <AlignJustify className="w-4 h-4" />
        </button>
        <div className="w-px h-6 bg-gray-300 mx-1"></div>
        <button
          type="button"
          onClick={setLink}
          className={`p-2 rounded ${editor.isActive('link') ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-200'}`}
          title="Chèn Link"
        >
          <LinkIcon className="w-4 h-4" />
        </button>
        <input 
          type="file" 
          accept="image/*" 
          ref={fileInputRef} 
          onChange={handleFileUpload} 
          className="hidden" 
        />
        <button
          type="button"
          onClick={addImageClick}
          className={`p-2 rounded text-gray-600 hover:bg-gray-200`}
          title="Tải ảnh lên (Từ máy trính)"
        >
          <ImageIcon className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={addImageFromUrl}
          className={`p-2 rounded text-gray-600 hover:bg-gray-200`}
          title="Chèn ảnh từ URL"
        >
          <Link2 className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={addYoutubeVideo}
          className={`p-2 rounded text-gray-600 hover:bg-gray-200`}
          title="Chèn Video YouTube"
        >
          <YoutubeIcon className="w-4 h-4" />
        </button>
        <div className="w-px h-6 bg-gray-300 mx-1"></div>
        <input
          type="color"
          onInput={event => editor.chain().focus().setColor((event.target as HTMLInputElement).value).run()}
          value={editor.getAttributes('textStyle').color || '#000000'}
          className="w-8 h-8 rounded border-none cursor-pointer p-0"
          title="Màu chữ"
        />
      </div>
    </>
  );
};
