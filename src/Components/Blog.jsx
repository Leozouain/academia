import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Os benefícios do treinamento de força para a saúde geral",
    answer:
      "O treinamento de força pode ser uma parte importante de um estilo de vida saudável e ativo. Além de ajudar a desenvolver músculos fortes e magros, o treinamento de força tem muitos outros benefícios para a saúde geral, como a prevenção da osteoporose, melhora da densidade óssea, redução do risco de doenças cardíacas e melhora do controle da glicose no sangue. Este artigo explora os muitos benefícios do treinamento de força, bem como dicas e orientações para começar.",
  },
  {
    question: "Como manter uma dieta saudável enquanto viaja",
    answer:
      "Se você está viajando a negócios ou a lazer, manter uma dieta saudável pode ser um desafio. A boa notícia é que existem muitas maneiras de manter uma dieta saudável enquanto você está na estrada. Este artigo oferece dicas úteis para se alimentar bem enquanto viaja, incluindo como planejar suas refeições com antecedência, escolher restaurantes saudáveis e fazer escolhas inteligentes ao comprar alimentos em aeroportos e estações de trem.",
  },
  {
    question: "Como se manter motivado para alcançar seus objetivos de fitness",
    answer:
      "Manter a motivação é uma parte essencial de alcançar seus objetivos de fitness. No entanto, pode ser fácil se sentir desmotivado ou desanimado quando as coisas ficam difíceis. Este artigo oferece conselhos úteis para se manter motivado e comprometido com seus objetivos de fitness, incluindo como definir metas realistas, criar um plano de ação, encontrar um parceiro de treino e manter um registro de seu progresso.",
  },
  {
    question: "Exercícios eficazes para fortalecer o core e melhorar a postura",
    answer:
      "O fortalecimento do core é essencial para a saúde e a forma física geral. Um core forte ajuda a melhorar a postura, reduzir o risco de lesões e melhorar a estabilidade e o equilíbrio. Este artigo apresenta uma variedade de exercícios eficazes para fortalecer o core, incluindo pranchas, abdominais, elevações de perna e exercícios de yoga.",
  },
  {
    question: "As melhores dicas para corredores iniciantes",
    answer:
      "Correr é uma excelente maneira de se manter ativo e saudável. No entanto, se você é novo na corrida, pode ser intimidante saber por onde começar. Este artigo oferece dicas úteis para corredores iniciantes, incluindo como escolher o calçado certo, estabelecer uma rotina de corrida, manter-se seguro durante a corrida e como lidar com a dor e a fadiga durante a corrida.",
  },
  // More questions...
]

export default function Blog() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Beneficios dos Exercicios Fisicos</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
