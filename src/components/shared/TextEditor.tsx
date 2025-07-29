import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import ToolBarEditor from './ToolBarEditor';

type Props = {
    onChange: (value: string) => void;
    value: string;
};

export default function TextEditor({ value, onChange }: Props) {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                bulletList: { HTMLAttributes: { class: 'list-disc ml-5' } },
                orderedList: { HTMLAttributes: { class: 'list-decimal ml-5' } },
            }),
        ],
        content: value,
        editorProps: {
            attributes: {
                class: 'w-full rounded-md border min-h-[150px] border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none',
            },
        },
        onUpdate: ({ editor }) => {
            const html = editor.getHTML();
            onChange(html);
        },
    });

    return (
        <div className='space-y-1'>
            <ToolBarEditor editor={editor} />
            <EditorContent editor={editor} />
        </div>
    );
}
