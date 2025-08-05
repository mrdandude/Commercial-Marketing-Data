import DonutChart from './components/DonutChart';

const sampleData = [
  { label: 'Category A', value: 50, color: '#FF3131' },
  { label: 'Category B', value: 25, color: '#FF5959' },
  { label: 'Category C', value: 18, color: '#FF8282' },
  { label: 'Category D', value: 10, color: '#FFAFAF' }
];

const alternativeData = [
  { label: 'Churned', value: 7.3, color: '#adf07e' },
  { label: 'Churned - Competitor Mentioned', value: 2.4, color: '#082b56' },
  { label: 'Billing Issue', value: 32, color: '#048a24' },
  { label: 'Other', value: 58.4, color: '#117170' }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center mb-8">Interactive Donut Chart</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Alternative Example */}
          <div className="flex flex-col items-center">
            <h2 className="mb-6">Churn Analysis</h2>
            <div className="bg-white p-8 rounded-lg">
            
              <DonutChart 
                data={alternativeData}
                size={250}
                innerRadius={0.6}
                showLabels={true}
                showLeaderLines={true}
              />
            </div>
          </div>
        </div>
        
        {/* Usage Instructions */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="mb-4">How to Use</h3>
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-medium">Basic Usage:</h4>
              <pre className="bg-gray-100 p-3 rounded mt-2 overflow-x-auto">
{`<DonutChart 
  data={[
    { label: 'Category A', value: 50, color: '#FF3131' },
    { label: 'Category B', value: 25, color: '#FF5959' },
    // ... more data
  ]}
/>`}
              </pre>
            </div>
            
            <div>
              <h4 className="font-medium">Props:</h4>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><code>data</code> - Array of objects with label, value, and color</li>
                <li><code>size</code> - Chart size in pixels (default: 300)</li>
                <li><code>innerRadius</code> - Inner radius ratio (default: 0.6)</li>
                <li><code>showLabels</code> - Show percentage labels (default: true)</li>
                <li><code>showLeaderLines</code> - Show leader lines (default: true)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium">Features:</h4>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Interactive hover effects</li>
                <li>Responsive legend</li>
                <li>Customizable colors and sizes</li>
                <li>Automatic percentage calculation</li>
                <li>Leader lines for better label positioning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
