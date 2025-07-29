import type { Editor } from '@tiptap/react';
import { Bold, Italic, List, ListOrdered } from 'lucide-react';

type Props = {
    editor: Editor;
};

export default function ToolBarEditor({ editor }: Props) {
    if (!editor) {
        return null;
    }

    return (
        <div className='space-x-5'>
            <button
                type='button'
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'font-bold text-blue-600' : ''}
            >
                <Bold size={18} />
            </button>
            <button
                type='button'
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? 'text-blue-600 italic' : ''}
            >
                <Italic size={18} />
            </button>
            <button
                type='button'
                onClick={() => {
                    editor.chain().focus().toggleBulletList().run();
                }}
                className={editor.isActive('bulletList') ? 'text-blue-600' : ''}
            >
                <List size={18} />
            </button>
            <button
                type='button'
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive('orderedList') ? 'text-blue-600' : ''}
            >
                <ListOrdered size={18} />
            </button>
        </div>
    );
}
