import { useState } from 'react';

export default function useExpandible() {
    const [expanded, setExpanded] = useState<{ [id: string]: boolean }>({});

    function toggleItem(id: string) {
        setExpanded((prev) => {
            return { ...prev, [id]: !prev[id] };
        });
    }

    return { expanded, toggleItem };
}
