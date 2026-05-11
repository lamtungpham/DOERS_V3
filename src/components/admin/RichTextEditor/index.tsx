import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Youtube from '@tiptap/extension-youtube';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import Link from '@tiptap/extension-link';
import { useState, useEffect } from 'react';
import { MenuBar } from './MenuBar';

export default function RichTextEditor({ content, onChange }: { content: string, onChange: (html: string) => void }) {
  const [showHtml, setShowHtml] = useState(false);
  const [htmlValue, setHtmlValue] = useState(content);

  // Sync back to editor when prop changes initially or to sync State
  useEffect(() => {
    setHtmlValue(content);
  }, [content]);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Color,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'mx-auto max-w-full rounded-lg my-4 h-auto',
        },
      }),
      Youtube.configure({
        controls: true,
        nocookie: true,
        allowFullscreen: true,
        HTMLAttributes: {
          class: 'mx-auto w-full aspect-video rounded-lg my-4 max-w-3xl',
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-brand-orange underline font-medium hover:text-orange-700',
        },
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-xl focus:outline-none max-w-none p-4 min-h-[300px]',
      },
    },
  });

  const handleHtmlChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHtmlValue(e.target.value);
    onChange(e.target.value);
    if (editor) {
      const { from, to } = editor.state.selection;
      editor.commands.setContent(e.target.value, { emitUpdate: false });
      // Try to restore selection roughly if possible, but simpler to just set content
    }
  };

  return (
    <div className="border border-gray-300 rounded-lg bg-white overflow-hidden focus-within:ring-2 focus-within:ring-brand-orange focus-within:border-brand-orange">
      <MenuBar editor={editor} showHtml={showHtml} setShowHtml={setShowHtml} />
      {showHtml ? (
        <textarea 
          className="w-full h-[500px] p-4 font-mono text-sm bg-gray-50 outline-none resize-y"
          value={htmlValue}
          onChange={handleHtmlChange}
        />
      ) : (
        <EditorContent editor={editor} className="bg-white" />
      )}
    </div>
  );
}
