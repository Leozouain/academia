const testimonials = [
    {
      body: 'Eu nunca pensei que pudesse chegar tão longe em meus objetivos de fitness, mas graças ao meu personal trainer, estou mais forte, mais saudável e mais confiante do que nunca.',
      author: {
        name: 'Moranghetto',
        handle: 'morangueto',
        imageUrl:
          'https://cdn.leonardo.ai/users/d926b8cb-c873-42be-8914-9530c5b7ddd4/generations/fd157db0-2010-45c8-b943-c55d5dd24faa/Cute_Characters_strawberry_rapper_male_1.jpg',
      },
    },
    {
      body: 'Meu personal trainer não apenas me ajudou a atingir minhas metas de perda de peso, mas também me ensinou a comer melhor e a incorporar o exercício em minha vida cotidiana de uma forma que funciona para mim.',
      author: {
        name: 'Tanga Frouxa',
        handle: 'tangafrouxex',
        imageUrl:
          'https://cdn.leonardo.ai/users/d926b8cb-c873-42be-8914-9530c5b7ddd4/generations/ae08cce8-1e74-4ca1-bc36-0e3190be93c8/Cute_Animal_Characters_litle_monster_green_and_purple_1.jpg',
      },
    },
    {
      body: 'Eu sempre me senti intimidado pelo ginásio e pela musculação, mas meu personal trainer me deu a confiança e o conhecimento para me sentir confortável e seguro em minha rotina de treino',
      author: {
        name: 'Jamanta',
        handle: 'naomorreu',
        imageUrl:
          'https://s.yimg.com/ny/api/res/1.2/fumxKARqyBX0z8xLD9SzQA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTUwMw--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/bae6fa7a7fad736ad686ac7acda879f9',
      },
    },
    {
      body: 'Meu personal trainer não é apenas um treinador, mas também um amigo e um mentor. Ele me motivou a trabalhar duro e a superar meus limites, enquanto me ajudou a superar os obstáculos pessoais em minha vida.',
      author: {
        name: 'Lula',
        handle: 'luladrao',
        imageUrl:
          'https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2022/12/05/folha_nacional_lula-22115754.jpg',
      },
    },
    {
      body: 'Antes de trabalhar com meu personal trainer, eu lutava com lesões e dores crônicas. Mas com seu conhecimento e experiência, ele me ajudou a reabilitar meu corpo e a alcançar um novo nível de saúde e bem-estar.',
      author: {
        name: 'Bolsonaro',
        handle: 'bozomito',
        imageUrl:
          'https://images.unsplash.com/photo-1654638879937-cbbb0d20d9c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      },
    },
    {
      body: 'Meu personal trainer não apenas me ajudou a atingir minhas metas de fitness, mas também me ensinou a importância da autodisciplina e da consistência em todas as áreas da minha vida. Eu sou muito grato pelo seu trabalho duro e dedicação.',
      author: {
        name: 'Adriano',
        handle: 'negobivas',
        imageUrl:
          'https://images.unsplash.com/photo-1472186422470-1f3fbde547aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80',
      },
    },
    
    // More testimonials...
  ]
  
  export default function Testmonial() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Depoimentos</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Conheça algumas pessoas que ja transformaram suas vidas!
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
              {testimonials.map((testimonial) => (
                <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                  <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                    <blockquote className="text-gray-900">
                      <p>{`“${testimonial.body}”`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                        <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  