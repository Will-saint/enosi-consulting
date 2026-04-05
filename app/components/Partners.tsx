export default function Partners() {
  const items = [
    { name: "Power BI", category: "Visualisation" },
    { name: "Python", category: "Data & IA" },
    { name: "SQL", category: "Data" },
    { name: "Azure", category: "Cloud" },
    { name: "Databricks", category: "Data Platform" },
    { name: "Tableau", category: "Visualisation" },
    { name: "dbt", category: "Data Transform" },
    { name: "OpenAI", category: "IA" },
    { name: "Spark", category: "Big Data" },
    { name: "Excel", category: "Finance" },
    { name: "SAP", category: "ERP" },
    { name: "Snowflake", category: "Data Warehouse" },
  ];

  return (
    <section className="py-20 px-6 border-b overflow-hidden"
             style={{borderColor: 'rgba(255,255,255,0.05)'}}>
      <div className="max-w-7xl mx-auto">
        <p className="text-xs text-gray-600 uppercase tracking-widest text-center mb-10">
          Technologies &amp; outils maîtrisés
        </p>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10"
               style={{background: 'linear-gradient(to right, #080810, transparent)'}} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10"
               style={{background: 'linear-gradient(to left, #080810, transparent)'}} />

          <div className="animate-scroll">
            {[...items, ...items].map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-6 py-3 rounded-full border flex items-center gap-3 whitespace-nowrap"
                style={{
                  borderColor: 'rgba(255,255,255,0.07)',
                  background: 'rgba(255,255,255,0.03)'
                }}
              >
                <span className="text-sm font-semibold text-white">{item.name}</span>
                <span className="text-xs" style={{color: 'rgba(255,255,255,0.25)'}}>{item.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
