import Back from "../Components/Back";


export default function About() {
  return (
    <>
    
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
            <Back/>
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Conheca melhor
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Ricardo Santana
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Personal trainer com mais de cinco anos de experiência na área
                de saúde e fitness. Ricardo é um entusiasta e especialista em
                alimentação adequada e acredita firmemente que uma dieta
                equilibrada é fundamental para alcançar os objetivos de
                condicionamento físico. <br/>
                Como personal trainer, Ricardo adota uma
                abordagem personalizada e adaptada às necessidades individuais
                de cada cliente.
                <br/> Ele trabalha em estreita colaboração com cada
                pessoa para desenvolver um plano de treinamento e nutrição
                personalizado, baseado em seus objetivos, estilo de vida e
                histórico médico.
                <br/> Ricardo está empenhado em ajudar seus clientes
                a alcançar seus objetivos, sejam eles perder peso, ganhar massa
                muscular, melhorar a saúde ou aumentar a energia e a disposição
                no dia a dia. 
                <br/>Ele se dedica a ajudar cada pessoa a se sentir
                mais confiante e saudável em seu corpo. Como especialista em
                alimentação adequada, Ricardo também oferece orientação e
                suporte para ajudar seus clientes a fazer escolhas alimentares
                saudáveis e sustentáveis.
                <br/> Ele acredita que a dieta deve ser
                vista como uma mudança de estilo de vida, e não apenas uma
                solução temporária.
                <br/> Ricardo é um profissional altamente
                qualificado e certificado, com uma ampla gama de habilidades em
                nutrição, treinamento de força, treinamento cardiovascular e
                muito mais.
                <br/> Ele está comprometido em manter-se atualizado com as
                últimas pesquisas e práticas em saúde e fitness, a fim de
                fornecer o melhor serviço possível para seus clientes. Se você
                está procurando um personal trainer comprometido em ajudá-lo a
                alcançar seus objetivos de fitness e saúde, entre em contato com
                Ricardo para agendar uma consulta.
                <br/> Juntos, vocês podem trabalhar
                para alcançar seus objetivos e transformar sua vida.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Comece hoje a transformar sua vida
              </h2>
              <div className="mt-10 flex   gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Agende sua sessão!
            </a>
            
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
}
