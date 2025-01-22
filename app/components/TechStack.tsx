const technologies = [
  { abbr: "React.js", label: "React" },
  { abbr: "Next.js", label: "Next.js" },
  { abbr: "Python", label: "Python" },
  { abbr: "Linux", label: "Linux" },
  { abbr: "TypeScript", label: "TypeScript" },
  { abbr: "Git", label: "Git" },
  { abbr: "Docker", label: "Docker" },
  { abbr: "AWS", label: "AWS" },
  { abbr: "Node.js", label: "Node.js" },
  { abbr: "SQL", label: "SQL" },
  { abbr: "MongoDB", label: "MongoDB" },
  { abbr: "Azure", label: "Azure" },
]

export function TechStack() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {technologies.map((tech) => (
        <div
          key={tech.label}
          className="flex items-center justify-center p-2 rounded-lg bg-neutral-800/30 hover:bg-neutral-700/50 transition-colors"
          title={tech.label}
        >
          <span className="text-sm font-medium">{tech.abbr}</span>
        </div>
      ))}
    </div>
  )
}

