export default function Partners() {
  const items = [
    {name:"Power BI", cat:"Visualisation"},
    {name:"Python", cat:"Data & IA"},
    {name:"SQL", cat:"Data"},
    {name:"Azure", cat:"Cloud"},
    {name:"Databricks", cat:"Platform"},
    {name:"dbt", cat:"Transform"},
    {name:"OpenAI", cat:"IA"},
    {name:"Spark", cat:"Big Data"},
    {name:"Excel / VBA", cat:"Finance"},
    {name:"SAP", cat:"ERP"},
    {name:"Snowflake", cat:"Warehouse"},
    {name:"Tableau", cat:"Viz"},
  ];

  return (
    <section style={{
      background:'#131315',
      borderTop:'1px solid rgba(144,143,158,0.06)',
      borderBottom:'1px solid rgba(144,143,158,0.06)',
      padding:'4rem 0', overflow:'hidden'
    }}>
      <p style={{
        fontSize:'0.65rem', letterSpacing:'0.2em',
        textTransform:'uppercase', textAlign:'center',
        color:'rgba(198,197,213,0.25)', marginBottom:'2.5rem'
      }}>
        Technologies &amp; outils
      </p>
      <div style={{position:'relative'}}>
        <div style={{
          position:'absolute', left:0, top:0, bottom:0, width:'8rem', zIndex:10,
          background:'linear-gradient(to right, #131315, transparent)'
        }}/>
        <div style={{
          position:'absolute', right:0, top:0, bottom:0, width:'8rem', zIndex:10,
          background:'linear-gradient(to left, #131315, transparent)'
        }}/>
        <div className="animate-scroll">
          {[...items, ...items].map((item, i) => (
            <div key={i} style={{
              flexShrink:0,
              padding:'0.6rem 1.5rem',
              borderRadius:'2rem',
              border:'1px solid rgba(144,143,158,0.1)',
              background:'rgba(255,255,255,0.02)',
              display:'flex', alignItems:'center', gap:'0.75rem',
              whiteSpace:'nowrap'
            }}>
              <span style={{fontSize:'0.8rem', fontWeight:600, color:'rgba(255,255,255,0.7)'}}>{item.name}</span>
              <span style={{fontSize:'0.65rem', color:'rgba(198,197,213,0.25)'}}>{item.cat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
