import React, { useState, useEffect } from 'react';
import TabsGenealogyView from '../components/TabsGenealogyView';
import linuxGenealogyData from '../data/linux-geneology.json';

/**
 * LinuxGenealogyPage - A page to display the Linux distribution genealogy
 * 
 * @returns {JSX.Element}
 */
const LinuxGenealogyPage = () => {
  const [data, setData] = useState(null);
  
  // Load the data
  useEffect(() => {
    setData(linuxGenealogyData);
  }, []);
  
  // Generate color legend from the data
  const generateColorLegend = () => {
    if (!data) return [];
    
    const legendItems = [];
    const processNode = (node) => {
      if (node.name && node.color) {
        legendItems.push({ name: node.name, color: node.color });
      }
      
      if (node.children && Array.isArray(node.children)) {
        node.children.forEach(processNode);
      }
    };
    
    processNode(data);
    return legendItems;
  };
  
  const colorLegend = generateColorLegend();
  
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Linux Distribution Genealogy</h1>
        <p className="text-sm mt-1">
          An interactive exploration of Linux distribution relationships and history
        </p>
        
        {/* Color Legend */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Color Legend</h2>
          <div className="flex flex-wrap gap-2">
            {colorLegend.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center"
              >
                <div 
                  className="w-4 h-4 mr-1 rounded" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex-grow bg-gray-900">
        {data ? (
          <TabsGenealogyView data={data} />
        ) : (
          <div className="flex items-center justify-center h-full text-white">
            Loading...
          </div>
        )}
      </div>
      
      <div className="bg-gray-800 text-white p-4 text-sm">
        <h3 className="font-semibold mb-2">How to use this visualization:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Use the <span className="font-semibold">tabs</span> to navigate between different Linux distributions</li>
          <li>Click on <span className="font-semibold">View Children</span> to explore child distributions</li>
          <li>Use the <span className="font-semibold">breadcrumb navigation</span> at the top to see your current location and navigate back</li>
          <li>Click on <span className="font-semibold">Facts</span> to expand and view interesting facts about each distribution</li>
          <li>The color bar on the left of each distribution corresponds to the color in the legend above</li>
        </ul>
      </div>
    </div>
  );
};

export default LinuxGenealogyPage;