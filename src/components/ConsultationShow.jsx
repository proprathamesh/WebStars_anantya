import React, { useState } from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

export default function ConsultationShow() {
    const [activeTab, setActiveTab] = useState('Current');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
      <Tabs activeKey={activeTab} onChange={handleTabChange}>
        <TabPane 
            tab={ "Current" }
            key="Current"
        >
            <div className="p-4 border rounded-md bg-white">
                <h2 className="text-lg font-semibold">Sample Current Consultation</h2>
                <p>This is a sample current consultation.</p>
            </div>
        </TabPane>
        <TabPane tab="History" key="History">
            <div className="p-4 border rounded-md bg-white">
                <h2 className="text-lg font-semibold">Sample Consultation History</h2>
                <p>This is a sample consultation from history.</p>
            </div>
        </TabPane>
      </Tabs>
    </div>
    );
}
