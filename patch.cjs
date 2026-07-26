const fs = require('fs');
const file = 'src/components/Comparison.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/<div className="overflow-x-auto">[\s\S]*?<\/div>/, `<div className="w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-4 md:p-8 text-[10px] md:text-[12px] font-semibold uppercase tracking-widest">Benefit</th>
                <th className="p-4 md:p-8 text-[10px] md:text-[12px] font-semibold text-center bg-primary-container uppercase tracking-widest">Zarrah Elixir</th>
                <th className="p-4 md:p-8 text-[10px] md:text-[12px] font-semibold text-center uppercase tracking-widest opacity-80">Chemicals</th>
              </tr>
            </thead>
            <tbody className="text-[14px] md:text-[16px] leading-[1.6] divide-y divide-outline/5">
              {benefits.map((item, idx) => (
                <tr key={idx} className="hover:bg-surface-container-low transition-colors">
                  <td className="p-4 md:p-8 font-medium text-primary">{item.name}</td>
                  <td className="p-4 md:p-8 text-center text-secondary bg-primary-container/5">
                    {item.zarrah ? <CheckCircle2 className="inline w-5 h-5 md:w-6 md:h-6 fill-secondary text-white" /> : <XCircle className="inline w-5 h-5 md:w-6 md:h-6 text-on-surface-variant/30" />}
                  </td>
                  <td className="p-4 md:p-8 text-center">
                    {item.chemical ? <CheckCircle2 className="inline w-5 h-5 md:w-6 md:h-6 text-secondary/60 fill-secondary/60 text-white" /> : <XCircle className="inline w-5 h-5 md:w-6 md:h-6 text-on-surface-variant/30" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>`);

fs.writeFileSync(file, content);
console.log('patched');
