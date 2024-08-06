import React from 'react'
import { experienceData } from '@/lib/data'

export default function JobHistory() {
  return (
    <section className="">
      <ul className="group/list flex flex-col gap-5">
        {
          experienceData.map((experience, index) =>
            <li key={experience.id} className="group/item relative grid grid-cols-8 text-sm gap-3 group-hover/list:opacity-50 hover:!opacity-100 hover:bg-slate-900/75 md:rounded-lg transition-all hover:bgrounded-lg px-[0.65rem] py-[0.5rem] mb-8">
              <header className="text-s font-semibold tracking-wide text-slate-500 col-span-2">
                {experience.dateStart} &mdash; {experience.dateEnd}
              </header>
              <div className='text-lg col-span-6'>
                <p className="text-slate-200 tracking-tight font-semibold leading-tight group-hover/item:text-green-400">{experience.title} &middot; {experience.company}</p>
                <p className="text-base">{experience.description}</p>
                <ul className='text-base flex gap-2 flex-wrap pt-2'>
                  {
                    experience.skillsUsed.map((skill) =>
                      <li key={skill} className="bg-slate-700 rounded-full px-[0.65rem]">
                        {skill}
                      </li>
                    )
                  }
                </ul>
              </div>
            </li>
          )
        }

      </ul>
    </section>
  )
}
