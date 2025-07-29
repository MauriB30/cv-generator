import Button from '../shared/Button';

type Tab = {
    name: string;
    label: string;
};

type Props = {
    tabs: Tab[];
    activeTab: string;
    setActiveTab: (tab: string) => void;
};

export default function FormTabs({ tabs, activeTab, setActiveTab }: Props) {
    return (
        <div className='space-x-5 rounded-md bg-blue-500 p-2'>
            {tabs.map((tab) => (
                <Button
                    key={tab.name}
                    variant='tab'
                    className={`capitalize ${activeTab === tab.name ? 'bg-blue-600 shadow-md' : ''} `}
                    type='button'
                    onClick={() => setActiveTab(tab.name)}
                >
                    {tab.label}
                </Button>
            ))}
        </div>
    );
}
