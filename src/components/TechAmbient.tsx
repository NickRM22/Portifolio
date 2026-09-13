import type { ReactNode } from 'react'

const drawings: Record<string, ReactNode> = {
  sobre: <><path d="M0 40h65l40 40v70l40 40h65M0 65h50l30 30v70l40 40h90M0 255h60l35-35v-30" /><circle cx="210" cy="190" r="5" /><circle cx="210" cy="205" r="5" /><circle cx="95" cy="185" r="5" /></>,
  competencias: <><rect x="60" y="90" width="100" height="100" rx="8" /><rect x="80" y="110" width="60" height="60" rx="3" /><path d="M75 90V45m25 45V30m25 60V45m25 45V30M75 190v45m25-45v65m25-65v45m25-45v65M60 105H15m45 25H0m60 25H15m45 25H0m160-75h45m-45 25h60m-60 25h45m-45 25h60" /></>,
  projetos: <><path d="m10 95 95-55 105 60-95 55Zm0 45 105 60 95-55M10 185l105 60 95-55M10 95v90m105-30v90m95-145v90" /><path d="m60 125 45-25 55 30m-55-30V40" strokeDasharray="4 7" /><circle cx="115" cy="245" r="5" /></>,
  experiencia: <><path d="M45 20v240m0-170c0 70 130 20 130 95v75" /><circle cx="45" cy="45" r="12" /><circle cx="45" cy="150" r="12" /><circle cx="45" cy="260" r="12" /><circle cx="175" cy="260" r="12" /><path d="M75 45h80m-80 8h45M75 150h65m-65 8h35M105 210h100" strokeDasharray="3 5" /></>,
  formacao: <><ellipse cx="110" cy="70" rx="85" ry="30" /><path d="M25 70v140c0 40 170 40 170 0V70M25 115c0 40 170 40 170 0M25 165c0 40 170 40 170 0" /><path d="M55 108h15m-15 50h15m-15 50h15" /></>,
  contato: <><circle cx="110" cy="150" r="30" /><circle cx="25" cy="55" r="14" /><circle cx="205" cy="75" r="14" /><circle cx="30" cy="250" r="14" /><circle cx="200" cy="235" r="14" /><path d="m35 67 55 60m42 4 62-46M90 174l-50 64m92-67 57 53" /><circle cx="110" cy="150" r="58" strokeDasharray="3 8" /></>,
}

export function TechAmbient({ section }: { section: string }) {
  if (!drawings[section]) return null

  return (
    <div aria-hidden="true" className={`tech-backdrop tech-backdrop-${section}`}>
      <svg viewBox="0 0 220 300" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" focusable="false">
        {drawings[section]}
      </svg>
    </div>
  )
}
