import React, { useState } from 'react';
import { Tabs, Badge } from 'antd';

const { TabPane } = Tabs;

export default function MessageShow() {
    const [activeTab, setActiveTab] = useState('unread');
    const [unreadMessagesCount, setUnreadMessagesCount] = useState(3);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
      <Tabs activeKey={activeTab} onChange={handleTabChange}>
        <TabPane 
            tab={
                <span>
                  Unread
                  <Badge count={unreadMessagesCount} style={{ marginLeft: 8 }} />
                </span>
              }
            key="unread">
          <div className="p-4 border rounded-md bg-white">
            <h2 className="text-lg font-semibold">Sample Unread Message</h2>
            <p>This is a sample unread message.</p>
          </div>
        </TabPane>
        <TabPane tab="Read" key="read">
          <div className="p-4 border rounded-md bg-white">
            <h2 className="text-lg font-semibold">Sample Read Message</h2>
            <p>This is a sample read message.</p>
          </div>
        </TabPane>
      </Tabs>
    </div>
    );
}
