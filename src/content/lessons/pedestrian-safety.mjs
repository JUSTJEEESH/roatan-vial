export default {
  id: 'pedestrian-safety',
  category: 'peatones',
  order: 1,
  minutes: 8,
  diagram: 'crosswalk',
  related: ['night-visibility', 'stopping-distance', 'road-markings', 'seatbelts-children'],
  sources: [
    { label: 'Organización Mundial de la Salud (OMS), Seguridad peatonal: manual de seguridad vial para decisores y profesionales, 2013',
      labelEn: 'World Health Organization (WHO), Pedestrian safety: a road safety manual for decision-makers and practitioners, 2013' },
    { label: 'Organización Mundial de la Salud (OMS), Manual de gestión de la velocidad, 2.ª ed., 2023',
      labelEn: 'World Health Organization (WHO), Speed management manual, 2nd ed., 2023' }
  ],
  es: {
    slug: 'seguridad-del-peaton',
    title: 'Caminar seguro y cuidar a quien camina',
    dek: 'Todos somos peatones en algún momento del día. Esta lección explica cómo caminar con más seguridad en calles con y sin acera, y cómo manejar cuando hay gente a pie cerca.',
    objectives: [
      'Saber por qué conviene caminar de frente al tráfico donde no hay acera.',
      'Entender cómo ser visible de día y de noche, y dónde cruzar con seguridad.',
      'Reconocer los lugares donde un conductor debe bajar la velocidad por los peatones.',
      'Saber cómo proteger a niños y personas mayores cuando caminan cerca de la calle.'
    ],
    sections: [
      {
        heading: 'Calles sin acera: camina de frente al tráfico',
        paragraphs: [
          'En muchas calles de la isla no hay acera, o la acera se interrumpe, está ocupada o se llena de agua cuando llueve. En esos tramos, la recomendación de los expertos en seguridad vial es caminar por el borde del camino <strong>de frente a los vehículos que vienen hacia ti</strong>, es decir, en sentido contrario al tráfico de tu lado.',
          'La razón es sencilla: si caminas de frente, ves el carro o la moto que se acerca y tienes un par de segundos para reaccionar, hacerte a un lado o detenerte. Si caminas de espaldas, dependes por completo de que el conductor te vea y te esquive. En una curva cerrada o una cuesta, donde el conductor te ve tarde, esos segundos importan mucho.',
          'Camina lo más lejos posible de la orilla del asfalto, en fila si van varias personas, y busca dónde apartarte (una entrada, un espacio amplio) cuando venga un bus o un camión. Si hay acera, úsala aunque sea más lenta.'
        ],
        list: [
          'Sin acera: de frente al tráfico, lo más a la orilla posible.',
          'En grupo: en fila, no en dos o tres columnas.',
          'Antes de una curva ciega, considera cruzar al lado donde te vean mejor, solo si puedes hacerlo con seguridad.'
        ]
      },
      {
        heading: 'Ser visible, de día y de noche',
        paragraphs: [
          'Un conductor no puede frenar por lo que no ve. De noche, una persona con ropa oscura en una calle sin alumbrado aparece en los faros muy tarde, a veces cuando ya no hay distancia suficiente para detenerse. La lluvia, el sol bajo de la mañana o de la tarde y las luces de otros vehículos lo empeoran.',
          'Usa ropa clara cuando vayas a caminar de noche, y si caminas seguido en calles oscuras, una banda o chaleco reflectivo vale la pena. Lleva una linterna o la luz del teléfono encendida apuntando hacia el suelo delante de ti: te ayuda a ver dónde pisas y hace que los conductores te noten. Recuerda que tú ves los faros del carro mucho antes de que el conductor te vea a ti.'
        ]
      },
      {
        heading: 'Cruzar donde puedas ver y ser visto',
        paragraphs: [
          'El mejor lugar para cruzar es un paso peatonal o una esquina con buena visibilidad. Si no hay paso peatonal, elige un tramo recto donde puedas ver lejos en ambas direcciones y donde los conductores también te vean a ti. Evita cruzar en curvas, en la cima de una cuesta o justo delante o detrás de un bus o un carro estacionado, porque te tapan.',
          'Detente en la orilla, mira a ambos lados y vuelve a mirar. Escucha también: las motos se acercan rápido y a veces se meten entre los carros. Cruza en línea recta, sin correr si puedes evitarlo, y sigue mirando mientras cruzas. Aunque estés en un paso peatonal, asegúrate de que el conductor te ha visto y se está deteniendo antes de bajar a la calle; busca contacto visual.',
          'El teléfono y los audífonos te quitan atención justo cuando más la necesitas. Guarda el teléfono antes de cruzar y quítate al menos un audífono cuando camines junto al tráfico.'
        ]
      },
      {
        heading: 'Niños y personas mayores',
        paragraphs: [
          'Los niños pequeños calculan mal la velocidad y la distancia de los vehículos, se distraen con facilidad y, por su estatura, no ven por encima de los carros estacionados ni los conductores los ven a ellos. Hasta que tengan edad y experiencia suficientes, deben cruzar de la mano de un adulto. Camina tú del lado de la calle y ellos del lado de adentro. Aprovecha cada salida para enseñarles a detenerse, mirar y escuchar.',
          'Las personas mayores pueden caminar más despacio, oír o ver menos, o tener dificultad para girar la cabeza. Si acompañas a alguien mayor, dale tiempo y elige el cruce más corto y visible. Como conductor, ten paciencia: espera a que terminen de cruzar sin presionarlos con el motor ni con la bocina.'
        ]
      },
      {
        heading: 'Si manejas: baja la velocidad donde hay gente',
        paragraphs: [
          'La velocidad decide dos cosas: si alcanzas a frenar a tiempo y qué tan grave es el golpe si no lo logras. Según la OMS, el riesgo de muerte para un peatón atropellado aumenta de forma marcada con cada aumento de velocidad del vehículo. Unos pocos kilómetros por hora menos pueden ser la diferencia entre un susto y una tragedia.',
          'Reduce la velocidad y ve preparado para frenar cerca de escuelas, sobre todo a la hora de entrada y salida; en paradas de bus, donde la gente baja y cruza por delante o por detrás; en pasos peatonales; y en los centros de las comunidades, donde hay tiendas, iglesias, ventas en la orilla y niños jugando.',
          'Cuando un vehículo se detiene delante de un paso peatonal, no lo rebases: probablemente está dejando pasar a alguien que tú no ves. De noche, usa luces bajas al acercarte a peatones para no deslumbrarlos, y dales espacio amplio al pasar a su lado.'
        ]
      }
    ],
    example: {
      title: 'Una caminata de regreso a casa',
      body: [
        'Imagina a una muchacha que sale del trabajo cuando ya oscureció y camina hacia su casa por una calle sin acera ni alumbrado. Lleva una blusa oscura, audífonos puestos y camina en el mismo sentido que el tráfico. Los carros que vienen detrás la iluminan apenas a pocos metros, y ella no los ve llegar.',
        'Con tres cambios su caminata es mucho más segura: cruza con cuidado y camina de frente al tráfico, se quita un audífono y lleva la luz del teléfono encendida. Ahora ve venir cada vehículo y tiene tiempo para hacerse a un lado, y los conductores la distinguen desde más lejos. Y el conductor que va por esa calle, si mantiene una velocidad moderada y luces adecuadas, también tiene margen para reaccionar.'
      ]
    },
    mistakes: [
      'Caminar de espaldas al tráfico donde no hay acera, porque no ves venir el peligro y dependes solo del conductor.',
      'Cruzar por delante de un bus detenido, porque el bus te tapa y los vehículos que lo rebasan no te ven.',
      'Usar ropa oscura de noche en calles sin luz, porque el conductor te ve demasiado tarde para frenar.',
      'Mirar el teléfono mientras cruzas, porque pierdes los segundos que necesitas para reaccionar.',
      'Como conductor, rebasar a un vehículo detenido frente a un paso peatonal, porque puede haber alguien cruzando delante de él.',
      'Pasar rápido frente a una escuela o parada de bus, porque los niños y los pasajeros pueden salir a la calle sin aviso.'
    ],
    checklist: [
      'Sin acera, camina de frente al tráfico y lo más a la orilla posible.',
      'De noche, usa ropa clara o reflectiva y lleva una luz.',
      'Cruza en tramos rectos y visibles, nunca detrás de un bus o en una curva.',
      'Guarda el teléfono y quítate un audífono al cruzar.',
      'Lleva a los niños pequeños de la mano y del lado de adentro.',
      'Al manejar, baja la velocidad cerca de escuelas, paradas, pasos peatonales y centros de comunidad.',
      'Nunca rebases a un vehículo detenido frente a un paso peatonal.'
    ],
    notes: [
      { kind: 'expert', text: 'Las guías de la OMS sobre seguridad peatonal señalan que reducir la velocidad de los vehículos donde hay peatones es una de las medidas más eficaces para prevenir muertes y lesiones graves.' },
      { kind: 'expert', text: 'Donde no hay acera, los especialistas en seguridad vial recomiendan caminar de frente al tráfico para poder ver los vehículos que se acercan.' },
      { kind: 'practical', text: 'Si caminas seguido de noche, guarda una banda reflectiva y una linterna pequeña en tu bolso o mochila para no depender de acordarte cada vez.' }
    ],
    check: [
      {
        q: 'Vas caminando por una calle sin acera. ¿Por qué lado conviene caminar?',
        options: [
          'En el mismo sentido que el tráfico, para no asustar a los conductores.',
          'Por el centro del carril, donde el piso está mejor.',
          'De frente al tráfico, lo más a la orilla posible, para ver los vehículos que vienen.'
        ],
        answer: 2,
        explain: 'Caminar de frente al tráfico te permite ver venir cada vehículo y apartarte a tiempo. De espaldas, dependes solo de que el conductor te vea.'
      },
      {
        q: 'Un carro se detiene delante de un paso peatonal en el carril de al lado. ¿Qué haces si vas manejando?',
        options: [
          'Te detienes también, porque puede haber alguien cruzando que no ves.',
          'Lo rebasas con cuidado, porque tu carril está libre.',
          'Tocas la bocina para saber por qué se detuvo.'
        ],
        answer: 0,
        explain: 'El carro detenido puede estar tapando a un peatón. Rebasarlo en ese momento es una de las formas más comunes de atropellar a alguien en un paso peatonal.'
      },
      {
        q: '¿Cuál es el lugar más seguro para cruzar cuando no hay paso peatonal?',
        options: [
          'Justo delante del bus, mientras está detenido.',
          'Un tramo recto donde puedes ver lejos en ambas direcciones y los conductores te ven a ti.',
          'Después de una curva, donde los carros van más despacio.'
        ],
        answer: 1,
        explain: 'Necesitas ver y ser visto. Un bus o una curva te esconden de los conductores y te impiden ver lo que viene.'
      }
    ],
    diagramCaption: 'En un paso peatonal, el peatón espera en la orilla, confirma que los conductores lo han visto y cruza en línea recta. El conductor se detiene antes de la línea y no rebasa a un vehículo detenido.'
  },
  en: {
    slug: 'pedestrian-safety',
    title: 'Walking safely and looking out for people on foot',
    dek: 'Everyone is a pedestrian at some point in the day. This lesson covers how to walk more safely on roads with and without sidewalks, and how to drive when people are walking nearby.',
    objectives: [
      'Know why it is safer to walk facing traffic where there is no sidewalk.',
      'Understand how to be visible by day and night, and where to cross safely.',
      'Recognise the places where drivers need to slow down for pedestrians.',
      'Know how to protect children and older people walking near the road.'
    ],
    sections: [
      {
        heading: 'No sidewalk? Walk facing traffic',
        paragraphs: [
          'Many roads on the island have no sidewalk, or the sidewalk stops, is blocked, or floods when it rains. On those stretches, road-safety experts recommend walking along the edge of the road <strong>facing the vehicles coming towards you</strong>, against the flow of traffic on your side.',
          'The reason is simple. When you walk facing traffic, you see the car or motorcycle approaching and have a couple of seconds to react, step aside or stop. With your back to traffic, you depend completely on the driver seeing you and steering around you. On a tight bend or a hill, where drivers see you late, those seconds matter a great deal.',
          'Keep as far from the edge of the tarmac as you can, walk in single file when you are in a group, and look for somewhere to step off (a driveway, a wider shoulder) when a bus or truck comes through. Where there is a sidewalk, use it, even if it is slower.'
        ],
        list: [
          'No sidewalk: face traffic and keep as far to the edge as possible.',
          'In a group: single file, not two or three abreast.',
          'Before a blind bend, consider crossing to the side where you will be seen better, but only if you can do it safely.'
        ]
      },
      {
        heading: 'Be visible, day and night',
        paragraphs: [
          'A driver cannot brake for what they cannot see. At night, someone in dark clothes on an unlit road shows up in the headlights very late, sometimes when there is no longer enough distance to stop. Rain, low morning or evening sun and the glare of other headlights make it worse.',
          'Wear light colours when you will be walking after dark, and if you often walk on dark roads, a reflective band or vest is worth having. Carry a torch or use your phone light, pointed at the ground ahead of you: it helps you see where you are stepping and makes drivers notice you. Remember that you see a car’s headlights long before the driver sees you.'
        ]
      },
      {
        heading: 'Cross where you can see and be seen',
        paragraphs: [
          'The best place to cross is a pedestrian crossing or a junction with a clear view. Where there is no crossing, choose a straight stretch where you can see a long way in both directions and where drivers can see you too. Avoid crossing on bends, at the top of a hill, or directly in front of or behind a bus or parked car, because they hide you.',
          'Stop at the edge, look both ways, and look again. Listen as well: motorcycles close in quickly and sometimes filter between cars. Cross in a straight line, without running if you can avoid it, and keep looking as you go. Even on a pedestrian crossing, make sure the driver has seen you and is actually stopping before you step out; try to make eye contact.',
          'Phones and headphones take your attention exactly when you need it most. Put the phone away before you cross, and take out at least one earbud when you are walking beside traffic.'
        ]
      },
      {
        heading: 'Children and older people',
        paragraphs: [
          'Young children misjudge the speed and distance of vehicles, are easily distracted and, because they are small, cannot see over parked cars, while drivers cannot see them either. Until they are old and experienced enough, they should cross holding an adult’s hand. Walk on the traffic side yourself and keep them on the inside. Use every trip to teach them to stop, look and listen.',
          'Older people may walk more slowly, see or hear less, or find it hard to turn their head. If you are walking with an older person, give them time and choose the shortest, most visible crossing. As a driver, be patient: wait for them to finish crossing without rushing them with your engine or horn.'
        ]
      },
      {
        heading: 'If you drive: slow down where people are',
        paragraphs: [
          'Speed decides two things: whether you can stop in time, and how serious the impact is if you cannot. According to the WHO, a pedestrian’s risk of death when hit rises sharply with every increase in vehicle speed. A few kilometres per hour less can be the difference between a scare and a tragedy.',
          'Slow down and be ready to brake near schools, especially at drop-off and pick-up times; at bus stops, where people get off and cross in front of or behind the bus; at pedestrian crossings; and in village centres, where there are shops, churches, roadside stalls and children playing.',
          'When a vehicle stops in front of a pedestrian crossing, do not overtake it: it is probably letting someone cross whom you cannot see. At night, dip your headlights as you approach people walking so you do not dazzle them, and give them plenty of room as you pass.'
        ]
      }
    ],
    example: {
      title: 'Walking home after dark',
      body: [
        'Picture a young woman leaving work after dark and walking home along a road with no sidewalk and no street lights. She is wearing a dark top, has earbuds in, and is walking in the same direction as the traffic. Cars coming from behind light her up only a few metres away, and she does not see them coming.',
        'Three changes make her walk much safer: she crosses carefully and walks facing traffic, takes out one earbud, and switches on her phone light. Now she sees every vehicle coming and has time to step aside, and drivers can pick her out from further away. And a driver on that road who keeps a moderate speed and uses the right lights also has room to react.'
      ]
    },
    mistakes: [
      'Walking with your back to traffic where there is no sidewalk, because you cannot see danger coming and rely entirely on the driver.',
      'Crossing in front of a stopped bus, because the bus hides you and vehicles overtaking it cannot see you.',
      'Wearing dark clothes at night on unlit roads, because drivers see you too late to stop.',
      'Looking at your phone while crossing, because you lose the seconds you need to react.',
      'As a driver, overtaking a vehicle stopped at a pedestrian crossing, because someone may be crossing in front of it.',
      'Driving fast past a school or bus stop, because children and passengers can step into the road without warning.'
    ],
    checklist: [
      'With no sidewalk, walk facing traffic and keep as far to the edge as possible.',
      'At night, wear light or reflective clothing and carry a light.',
      'Cross on straight, visible stretches, never behind a bus or on a bend.',
      'Put your phone away and take out an earbud when crossing.',
      'Hold young children’s hands and keep them on the inside.',
      'When driving, slow down near schools, bus stops, crossings and village centres.',
      'Never overtake a vehicle stopped at a pedestrian crossing.'
    ],
    notes: [
      { kind: 'expert', text: 'WHO guidance on pedestrian safety identifies lower vehicle speeds where people walk as one of the most effective ways to prevent deaths and serious injuries.' },
      { kind: 'expert', text: 'Where there is no sidewalk, road-safety specialists recommend walking facing traffic so you can see approaching vehicles.' },
      { kind: 'practical', text: 'If you often walk after dark, keep a reflective band and a small torch in your bag so you do not have to remember them each time.' }
    ],
    check: [
      {
        q: 'You are walking on a road with no sidewalk. Which side is safest?',
        options: [
          'In the same direction as traffic, so you do not startle drivers.',
          'In the middle of the lane, where the surface is better.',
          'Facing traffic, as close to the edge as possible, so you can see what is coming.'
        ],
        answer: 2,
        explain: 'Walking facing traffic lets you see every vehicle coming and step aside in time. With your back to traffic, you rely entirely on the driver seeing you.'
      },
      {
        q: 'A car stops in front of a pedestrian crossing in the next lane. What do you do if you are driving?',
        options: [
          'Stop as well, because someone you cannot see may be crossing.',
          'Overtake carefully, because your lane is clear.',
          'Sound your horn to find out why it stopped.'
        ],
        answer: 0,
        explain: 'The stopped car may be hiding a pedestrian. Overtaking at that moment is one of the most common ways people are hit on crossings.'
      },
      {
        q: 'Where is the safest place to cross when there is no pedestrian crossing?',
        options: [
          'Right in front of the bus while it is stopped.',
          'A straight stretch where you can see far in both directions and drivers can see you.',
          'Just after a bend, where cars are going slower.'
        ],
        answer: 1,
        explain: 'You need to see and be seen. A bus or a bend hides you from drivers and stops you seeing what is coming.'
      }
    ],
    diagramCaption: 'At a pedestrian crossing, the pedestrian waits at the edge, checks that drivers have seen them and crosses in a straight line. The driver stops before the line and does not overtake a stopped vehicle.'
  }
};
