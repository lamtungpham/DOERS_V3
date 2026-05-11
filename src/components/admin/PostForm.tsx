import React from 'react';
import { Upload, Save } from 'lucide-react';
import RichTextEditor from './RichTextEditor';

interface PostFormProps {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleContentChange: (html: string) => void;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  saving: boolean;
  uploadingImage: boolean;
  isEditMode: boolean;
  categories: string[];
}

export function PostForm({
  formData,
  setFormData,
  handleInputChange,
  handleContentChange,
  handleImageUpload,
  handleSubmit,
  saving,
  uploadingImage,
  isEditMode,
  categories
}: PostFormProps) {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tiêu đề bài viết <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-orange focus:border-brand-orange text-lg font-semibold"
              placeholder="Nhập tiêu đề..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả ngắn (Excerpt)</label>
            <textarea
              name="excerpt"
              rows={3}
              value={formData.excerpt}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-orange focus:border-brand-orange"
              placeholder="Tóm tắt nội dung bài viết..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nội dung <span className="text-red-500">*</span></label>
            <RichTextEditor content={formData.content} onChange={handleContentChange} />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4 border-b pb-2">Thông tin bài đăng</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Danh mục</label>
                <input
                  type="text"
                  name="cat"
                  list="category-options"
                  value={formData.cat}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-orange focus:border-brand-orange"
                  placeholder="Chọn hoặc nhập danh mục mới..."
                />
                <datalist id="category-options">
                  {categories.map(cat => (
                    <option key={cat} value={cat} />
                  ))}
                </datalist>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ảnh đại diện (Thumbnail URL)</label>
                <input
                  type="url"
                  name="thumbnailUrl"
                  value={formData.thumbnailUrl}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-orange focus:border-brand-orange text-sm mb-2"
                  placeholder="https://..."
                />
                
                <div className="relative">
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="thumbnail-upload"
                    disabled={uploadingImage}
                  />
                  <label 
                    htmlFor="thumbnail-upload"
                    className={`flex items-center justify-center w-full px-4 py-2 border border-dashed rounded cursor-pointer transition ${uploadingImage ? 'bg-gray-100 text-gray-400 border-gray-300' : 'border-gray-400 text-gray-600 hover:bg-gray-50'}`}
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    {uploadingImage ? 'Đang tải lên...' : 'Hoặc tải ảnh lên (Storage)'}
                  </label>
                </div>

                {formData.thumbnailUrl && (
                  <div className="mt-3 relative pt-[56.25%] rounded overflow-hidden border border-gray-200 bg-gray-100">
                    <img 
                      src={formData.thumbnailUrl} 
                      alt="Thumbnail preview" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              const previewWindow = window.open('', '_blank');
              if (previewWindow) {
                previewWindow.document.write(`
                  <html>
                    <head>
                      <title>Preview: ${formData.title}</title>
                      <script src="https://cdn.tailwindcss.com"></script>
                      <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;700;900&family=Pattaya&display=swap" rel="stylesheet">
                      <style>
                        body { font-family: 'Be Vietnam Pro', sans-serif; background: #fafafa; padding: 2rem; }
                        .prose { max-width: 800px; margin: 0 auto; background: white; padding: 3rem; border-radius: 1rem; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); }
                        h1 { font-family: 'Pattaya', sans-serif; font-size: 3rem; line-height: 1.1; margin-bottom: 2rem; color: #111827; }
                        img { border-radius: 0.5rem; max-width: 100%; height: auto; margin: 2rem auto; display: block; }
                        iframe { border-radius: 0.5rem; max-width: 100%; margin: 2rem auto; display: block; aspect-ratio: 16/9; }
                      </style>
                    </head>
                    <body>
                      <article class="prose prose-lg md:prose-xl lg:prose-2xl prose-headings:font-pattaya text-gray-800">
                        <h1>${formData.title}</h1>
                        ${formData.content}
                      </article>
                    </body>
                  </html>
                `);
              } else {
                alert('Vui lòng cho phép mở pop-up để xem trước!');
              }
            }}
            className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange mb-3"
          >
            Xem trước
          </button>
          <button
            type="submit"
            disabled={saving}
            className={`w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${saving ? 'bg-orange-400' : 'bg-brand-orange hover:bg-orange-600'} transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange`}
          >
            <Save className="w-5 h-5 mr-2" />
            {saving ? 'Đang lưu...' : (isEditMode ? 'Cập nhật bài viết' : 'Xuất bản bài viết')}
          </button>
        </div>
      </div>
    </form>
  );
}
