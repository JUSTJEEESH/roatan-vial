export default {
  id: 'following-distance',
  category: 'velocidad',
  order: 1,
  minutes: 7,
  diagram: 'following-distance',
  related: ['stopping-distance', 'rain-riding', 'group-riding', 'calm-driving'],
  sources: [
    { label: 'Organización Mundial de la Salud (OMS), Speed management: a road safety manual for decision-makers and practitioners (en inglés), 2.ª ed., 2023',
      labelEn: 'World Health Organization (WHO), Speed management: a road safety manual for decision-makers and practitioners, 2nd ed., 2023' }
  ],
  es: {
    slug: 'distancia-de-seguimiento',
    title: 'Distancia de seguimiento: el espacio que te salva',
    dek: 'Cuando el vehículo de adelante frena de repente, lo que decide si chocas o no es el espacio que dejaste. Contar segundos es la forma más sencilla de saber si es suficiente.',
    objectives: [
      'Entender por qué la distancia con el vehículo de adelante decide si te da tiempo de frenar.',
      'Saber medir la distancia en segundos usando un punto fijo.',
      'Saber cuándo aumentar esa distancia: lluvia, noche, detrás de motos o vehículos grandes, con carga.',
      'Saber qué hacer cuando alguien viene pegado detrás de ti.'
    ],
    sections: [
      {
        heading: 'Por qué la distancia importa',
        paragraphs: [
          'Cuando el vehículo de adelante frena, tú no frenas al mismo tiempo. Primero tienes que ver la luz de freno, entender lo que pasa y mover el pie o la mano al freno. Ese tiempo de reacción, en una persona atenta, suele estar alrededor de un segundo o un poco más, y es mayor si vas distraído, cansado o mirando el teléfono. Durante ese tiempo sigues avanzando a la misma velocidad.',
          'Por ejemplo, a 50 km/h recorres casi 14 metros cada segundo. Si vas a un segundo del carro de adelante y tardas un segundo y medio en reaccionar, el espacio se acaba antes de que empieces a frenar. El choque por detrás no es mala suerte: es falta de espacio.',
          'La distancia de seguimiento es tu margen para reaccionar. Mientras más espacio dejas, más tiempo tienes para ver, decidir y frenar con calma, o para esquivar si hace falta.',
          'El espacio también te deja ver. Si vas pegado, solo ves la parte trasera del vehículo de adelante; con distancia, ves lo que pasa más allá, el bache que él va a pasar por encima o el carro que va a salir de una entrada. En moto esto es todavía más importante: con espacio puedes ver el hueco o la arena en el pavimento y cambiar tu línea con tiempo, en lugar de encontrarlo cuando ya lo tienes debajo.'
        ]
      },
      {
        heading: 'Cómo medir la distancia en segundos',
        paragraphs: [
          'Medir en metros mientras manejas es casi imposible. Medir en segundos es fácil y además se ajusta solo a la velocidad: a más velocidad, los mismos segundos equivalen a más metros. Así se hace:'
        ],
        list: [
          'Elige un punto fijo al lado de la calle: un poste, un árbol, una señal o una sombra en el pavimento.',
          'Cuando la parte trasera del vehículo de adelante pase ese punto, empieza a contar: “mil uno, mil dos, mil tres”.',
          'Si llegas al punto antes de terminar de contar, vas demasiado cerca. Suelta el acelerador y deja que el espacio crezca.',
          'Repite la cuenta de vez en cuando, sobre todo cuando cambie la velocidad o el clima.'
        ]
      },
      {
        heading: '¿Cuántos segundos?',
        paragraphs: [
          'Como guía de seguridad vial muy difundida, dos segundos es el mínimo absoluto en buenas condiciones: calle seca, de día, buena visibilidad y un vehículo en buen estado. Para tener un margen real, lo recomendable es dejar tres segundos o más.',
          'Para darte una idea, a 50 km/h dos segundos son unos 28 metros y tres segundos unos 42 metros. A 80 km/h, dos segundos son unos 44 metros y tres segundos unos 67 metros. No hace falta recordar las cifras: si cuentas los segundos, los metros se ajustan solos.'
        ],
        list: [
          'Con lluvia o calle mojada: bastante más, porque necesitas más distancia para frenar.',
          'De noche: más, porque ves menos y reaccionas más tarde.',
          'Detrás de una moto: más, porque una moto puede frenar muy rápido y caerse, y necesitas espacio para no pasar encima.',
          'Detrás de un camión o un bus: más, porque tapan tu vista de lo que viene adelante.',
          'Cuando vas cargado o con pasajero: más, porque el vehículo tarda más en detenerse.',
          'Si estás cansado o la calle tiene baches, arena o grava: más.'
        ]
      },
      {
        heading: 'Cuando alguien viene pegado detrás de ti',
        paragraphs: [
          'No puedes controlar lo que hace el de atrás, pero sí puedes darte más margen a ti mismo. Si alguien viene pegado, la peor respuesta es frenar de golpe para “darle una lección”: eso es exactamente lo que provoca el choque.',
          'Lo que funciona es aumentar el espacio delante de ti. Si tienes más distancia con el de adelante, podrás frenar de forma más suave y progresiva, y el de atrás tendrá más tiempo para reaccionar. Avisa con tiempo antes de frenar o girar, usando las direccionales y tocando el freno suavemente. Si la situación sigue, cuando sea seguro hazte a un lado o déjalo pasar. Llegar dos minutos después no cuesta nada.'
        ]
      }
    ],
    example: {
      title: 'Hora pico en la carretera principal',
      body: [
        'Imagina una fila de carros, mototaxis y motos en la carretera principal a la hora de salida del trabajo. Un conductor va a menos de un segundo del pickup de adelante, porque siente que si deja espacio alguien se le va a meter.',
        'El pickup frena porque un perro cruza la calle. El conductor de atrás está mirando por un momento el retrovisor y, cuando vuelve la vista, ya no le da el espacio. El choque es a baja velocidad, pero suficiente para dañar los dos vehículos, lastimar a alguien y detener el tráfico de todos.',
        'Con tres segundos de distancia, la misma frenada habría sido solo eso: una frenada. Y si alguien se mete en el espacio, la solución es simple: suelta el acelerador y vuelve a abrir la distancia.'
      ]
    },
    mistakes: [
      'Ir pegado para que nadie se meta: si alguien se mete, solo pierdes unos segundos; si chocas, pierdes mucho más.',
      'Calcular la distancia “a ojo” en metros: es fácil equivocarse; contar segundos es más confiable.',
      'Usar la misma distancia con lluvia o de noche: esas condiciones exigen bastante más espacio.',
      'Ir pegado detrás de un camión o bus: te tapa la vista y no ves por qué frena.',
      'Frenar de golpe para castigar a quien viene pegado: provoca justo el choque que quieres evitar.',
      'Ir muy cerca detrás de una moto: si se cae o frena fuerte, no tienes espacio para detenerte.'
    ],
    checklist: [
      'Elige un punto fijo y cuenta “mil uno, mil dos, mil tres”.',
      'Mínimo dos segundos en buenas condiciones; tres o más es lo recomendable.',
      'Más segundos con lluvia, de noche, con carga o cansado.',
      'Más espacio detrás de motos, camiones y buses.',
      'Si alguien se mete adelante, suelta el acelerador y vuelve a abrir el espacio.',
      'Si te vienen pegado, aumenta tu espacio adelante y frena con suavidad.',
      'Señaliza con tiempo antes de frenar o girar.'
    ],
    notes: [
      { kind: 'expert', text: 'La regla de los segundos es una guía de seguridad vial muy difundida: dos segundos se consideran el mínimo en buenas condiciones, y se recomienda más en lluvia, de noche o con mala visibilidad.' },
      { kind: 'practical', text: 'Cuando alguien se mete en tu espacio, no lo tomes como algo personal. Suelta el acelerador unos segundos y vuelve a tener tu margen.' }
    ],
    check: [
      {
        q: 'Usando un poste como punto fijo, llegas al poste cuando apenas dices “mil uno”. ¿Qué significa?',
        options: [
          'Que vas a una distancia correcta.',
          'Que el carro de adelante va demasiado lento.',
          'Que vas demasiado cerca y debes soltar el acelerador para abrir espacio.'
        ],
        answer: 2,
        explain: 'Llegar al punto en un segundo significa que tienes un segundo o menos de margen, menos que el tiempo que tardas en reaccionar.'
      },
      {
        q: 'Está lloviendo y vas detrás de una moto. ¿Cuánta distancia dejas?',
        options: [
          'Dos segundos, como siempre.',
          'Bastante más de tres segundos.',
          'Un segundo, porque la moto es pequeña.'
        ],
        answer: 1,
        explain: 'La lluvia alarga la distancia de frenado y una moto puede frenar o caerse muy rápido. Las dos condiciones exigen más espacio.'
      },
      {
        q: 'Un carro viene muy pegado detrás de ti. ¿Cuál es la mejor respuesta?',
        options: [
          'Aumentar tu distancia con el de adelante, frenar con suavidad y dejarlo pasar cuando sea seguro.',
          'Frenar de golpe para que se aleje.',
          'Acelerar para separarte de él.'
        ],
        answer: 0,
        explain: 'Más espacio adelante te permite frenar de forma suave y da tiempo al de atrás. Frenar de golpe o acelerar solo aumenta el riesgo.'
      }
    ],
    diagramCaption: 'Cuando la parte trasera del vehículo de adelante pasa un punto fijo, cuenta los segundos hasta que tú llegas al mismo punto. Dos segundos es el mínimo en buenas condiciones; tres o más es lo recomendable.'
  },
  en: {
    slug: 'following-distance',
    title: 'Following distance: the space that saves you',
    dek: 'When the vehicle ahead brakes suddenly, what decides whether you crash is the space you left. Counting seconds is the simplest way to know if it is enough.',
    objectives: [
      'Understand why the gap to the vehicle ahead decides whether you have time to brake.',
      'Know how to measure the gap in seconds using a fixed point.',
      'Know when to increase that gap: rain, night, behind motorcycles or large vehicles, when loaded.',
      'Know what to do when someone is tailgating you.'
    ],
    sections: [
      {
        heading: 'Why the gap matters',
        paragraphs: [
          'When the vehicle ahead brakes, you don’t brake at the same moment. First you have to see the brake light, understand what is happening and move your foot or hand to the brake. That reaction time, for an alert person, is usually around a second or a little more, and longer if you are distracted, tired or looking at your phone. During that time you keep moving at the same speed.',
          'For example, at 50 km/h you travel almost 14 metres every second. If you are one second behind the car in front and take a second and a half to react, the space runs out before you even start braking. A rear-end crash isn’t bad luck: it is a lack of space.',
          'Your following distance is your margin to react. The more space you leave, the more time you have to see, decide and brake calmly, or to steer around if you need to.',
          'Space also lets you see. If you are right behind someone, all you see is the back of their vehicle; with a gap, you can see what is happening beyond it, the pothole they are about to drive over or the car about to pull out of a driveway. On a motorcycle this matters even more: with space you can spot the hole or the sand on the road and change your line in time, instead of finding it when it is already under your wheel.'
        ]
      },
      {
        heading: 'How to measure the gap in seconds',
        paragraphs: [
          'Measuring in metres while you drive is almost impossible. Measuring in seconds is easy, and it adjusts to your speed automatically: the faster you go, the more metres the same seconds cover. Here’s how:'
        ],
        list: [
          'Pick a fixed point at the side of the road: a post, a tree, a sign or a shadow on the road.',
          'When the back of the vehicle ahead passes that point, start counting: “one thousand and one, one thousand and two, one thousand and three”.',
          'If you reach the point before you finish counting, you are too close. Ease off the accelerator and let the gap grow.',
          'Count again from time to time, especially when your speed or the weather changes.'
        ]
      },
      {
        heading: 'How many seconds?',
        paragraphs: [
          'As widely used road-safety guidance, two seconds is the absolute minimum in good conditions: a dry road, daylight, good visibility and a vehicle in good condition. For a real margin, leave three seconds or more.',
          'To give you an idea, at 50 km/h two seconds is about 28 metres and three seconds about 42 metres. At 80 km/h, two seconds is about 44 metres and three seconds about 67 metres. You don’t need to remember the figures: if you count the seconds, the metres take care of themselves.'
        ],
        list: [
          'In rain or on a wet road: considerably more, because you need more distance to stop.',
          'At night: more, because you see less and react later.',
          'Behind a motorcycle: more, because a motorcycle can stop very quickly or fall, and you need room not to run over it.',
          'Behind a truck or bus: more, because they block your view of what’s ahead.',
          'When loaded or carrying a passenger: more, because the vehicle takes longer to stop.',
          'If you are tired or the road has potholes, sand or gravel: more.'
        ]
      },
      {
        heading: 'When someone is tailgating you',
        paragraphs: [
          'You can’t control what the driver behind does, but you can give yourself more margin. If someone is right on your tail, the worst response is to brake sharply to “teach them a lesson”: that is exactly what causes the crash.',
          'What works is increasing the space in front of you. With a bigger gap to the vehicle ahead, you can brake more gently and progressively, and the driver behind gets more time to react. Signal early before braking or turning, using your indicators and touching the brake lightly. If it continues, when it is safe, pull over or let them pass. Arriving two minutes later costs you nothing.'
        ]
      }
    ],
    example: {
      title: 'Rush hour on the main road',
      body: [
        'Picture a line of cars, mototaxis and motorcycles on the main road as people head home from work. One driver is less than a second behind the pickup in front, because he feels that if he leaves a gap someone will cut in.',
        'The pickup brakes because a dog runs across the road. The driver behind has glanced at his mirror for a moment and, when he looks back, there isn’t enough space. The collision is at low speed, but it is enough to damage both vehicles, hurt someone and hold up everyone’s traffic.',
        'With a three-second gap, the same braking would have been just that: braking. And if someone cuts into the gap, the fix is simple: ease off and open the gap again.'
      ]
    },
    mistakes: [
      'Driving close so nobody cuts in: if someone does, you lose a few seconds; if you crash, you lose far more.',
      'Judging the gap “by eye” in metres: it is easy to get wrong; counting seconds is more reliable.',
      'Keeping the same gap in rain or at night: those conditions call for considerably more space.',
      'Sitting close behind a truck or bus: it blocks your view and you can’t see why it is braking.',
      'Braking sharply to punish a tailgater: it causes the very crash you want to avoid.',
      'Following a motorcycle closely: if it falls or brakes hard, you have no room to stop.'
    ],
    checklist: [
      'Pick a fixed point and count “one thousand and one, one thousand and two, one thousand and three”.',
      'Two seconds minimum in good conditions; three or more is recommended.',
      'More seconds in rain, at night, when loaded or tired.',
      'More space behind motorcycles, trucks and buses.',
      'If someone cuts in ahead, ease off and open the gap again.',
      'If you are being tailgated, increase your space ahead and brake gently.',
      'Signal early before braking or turning.'
    ],
    notes: [
      { kind: 'expert', text: 'The time-gap rule is widely used road-safety guidance: two seconds is considered the minimum in good conditions, with more recommended in rain, at night or in poor visibility.' },
      { kind: 'practical', text: 'When someone cuts into your space, don’t take it personally. Ease off for a few seconds and get your margin back.' }
    ],
    check: [
      {
        q: 'Using a post as your fixed point, you reach it just as you say “one thousand and one”. What does that mean?',
        options: [
          'That you are at the right distance.',
          'That the car ahead is going too slowly.',
          'That you are too close and should ease off to open the gap.'
        ],
        answer: 2,
        explain: 'Reaching the point in one second means you have a second or less of margin, less than the time it takes you to react.'
      },
      {
        q: 'It is raining and you are behind a motorcycle. How much gap do you leave?',
        options: [
          'Two seconds, as always.',
          'Considerably more than three seconds.',
          'One second, because a motorcycle is small.'
        ],
        answer: 1,
        explain: 'Rain lengthens braking distance and a motorcycle can stop or fall very quickly. Both conditions call for more space.'
      },
      {
        q: 'A car is tailgating you closely. What is the best response?',
        options: [
          'Increase your gap to the vehicle ahead, brake gently and let them pass when it is safe.',
          'Brake sharply so they back off.',
          'Speed up to get away from them.'
        ],
        answer: 0,
        explain: 'More space ahead lets you brake gently and gives the driver behind time. Braking sharply or speeding up only increases the risk.'
      }
    ],
    diagramCaption: 'When the back of the vehicle ahead passes a fixed point, count the seconds until you reach the same point. Two seconds is the minimum in good conditions; three or more is recommended.'
  }
};
