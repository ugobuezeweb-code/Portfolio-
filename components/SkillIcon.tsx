
export default function SkillIcon({name}:{name:string}){
  const emoji = {
    React:'⚛️', Next:'⚡', TypeScript:'🟦', Node:'🟢', MongoDB:'🍃', Tailwind:'🎨', AWS:'☁️', Docker:'🐳', Git:'🔧', Nodemailer:'📬'
  } as Record<string,string>
  return <span className="skill">{emoji[name] || '🔸'} {name}</span>
}
