import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Sparkles, Send, Bot, User, AlertTriangle } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'

export const Route = createFileRoute('/ai-assistant')({
  component: AiAssistantPage,
})

type Message = { role: 'user' | 'ai'; text: string }

const initialMessages: Message[] = [
  { role: 'user', text: 'Explain Newton\'s Laws in simple language.' },
  {
    role: 'ai',
    text:
      "Sure! Newton's Three Laws explain how objects move:\n\n1. First Law (Inertia): An object stays still or keeps moving at the same speed unless a force acts on it. Example: a ball on a table stays still until you push it.\n\n2. Second Law (F = ma): The force on an object equals its mass times acceleration. A heavier object needs more force to speed up the same way.\n\n3. Third Law (Action-Reaction): Every action has an equal and opposite reaction. Example: when you jump, you push the ground down and it pushes you up.",
  },
]

const quickActions = [
  { label: 'Explain', prompt: 'Explain this topic in simple terms.' },
  { label: 'Solve', prompt: 'Solve this problem step by step.' },
  { label: 'Summarize', prompt: 'Summarize these notes for quick revision.' },
  { label: 'Quiz Me', prompt: 'Quiz me on this chapter.' },
  { label: 'Create Study Plan', prompt: 'Create a 7-day revision plan for me.' },
]

const canHelpWith = [
  'Explain a topic',
  'Solve a mathematical problem',
  'Explain a science concept',
  'Generate practice questions',
  'Summarize notes',
  'Create revision plans',
  'Explain PYQs',
  'Give study strategies',
  'Help with programming concepts',
  'Answer career/learning questions',
]

function mockReply(prompt: string): string {
  const p = prompt.toLowerCase()
  if (p.includes('quiz')) {
    return "Here's a quick quiz:\n\n1. What is the SI unit of force?\n2. State Newton's Second Law.\n3. Give one real-life example of inertia.\n\nReply with your answers and I'll check them!"
  }
  if (p.includes('study plan') || p.includes('revision plan')) {
    return "Here's a simple 7-day plan:\n\nDay 1-2: Revise weak chapters using Quick Revision notes.\nDay 3-4: Practice PYQs for those chapters.\nDay 5: Take a mock test.\nDay 6: Review mistakes and clear doubts.\nDay 7: Light revision + rest."
  }
  if (p.includes('solve')) {
    return "Share the exact question and I'll walk through it step by step, showing the formula, substitution, and final answer."
  }
  if (p.includes('summarize')) {
    return "Paste your notes or chapter name, and I'll give you a concise summary with the key points highlighted."
  }
  return "Got it! I'm processing your question. In the full version, VidhyaPath AI would give a detailed, personalized explanation right here — try one of the quick actions below to see a sample response."
}

function AiAssistantPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState('')

  const send = (text: string) => {
    if (!text.trim()) return
    setMessages((prev) => [...prev, { role: 'user', text }, { role: 'ai', text: mockReply(text) }])
    setInput('')
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
      <SectionHeading
        eyebrow="VidhyaPath AI"
        title="Your 24/7 Personal Study Assistant"
        description="Ask anything — from tough concepts to career questions. VidhyaPath AI is always ready to help."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="flex h-[560px] flex-col rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">VidhyaPath AI</p>
              <p className="text-xs text-emerald-600">● Online now</p>
            </div>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
            {messages.map((m, i) => (
              <div key={i} className={`flex items-start gap-3 ${m.role === 'user' ? 'justify-end' : ''}`}>
                {m.role === 'ai' && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                    <Bot className="h-4 w-4" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {m.text}
                </div>
                {m.role === 'user' && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-600">
                    <User className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-slate-100 px-6 py-4">
            <div className="mb-3 flex flex-wrap gap-2">
              {quickActions.map((qa) => (
                <button
                  key={qa.label}
                  onClick={() => send(qa.prompt)}
                  className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 transition-colors hover:bg-indigo-100"
                >
                  {qa.label}
                </button>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                send(input)
              }}
              className="flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask VidhyaPath AI anything..."
                className="flex-1 rounded-full border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />
              <button
                type="submit"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white transition-colors hover:bg-indigo-700"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-sm font-bold text-slate-900">What can VidhyaPath AI do?</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {canHelpWith.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600" />
            <p className="text-xs leading-relaxed text-amber-800">
              VidhyaPath AI provides study assistance to support your learning. Please verify important
              academic or exam-related decisions with your teacher or official study material.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
