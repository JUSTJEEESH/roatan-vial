// ROATÁN VIAL — quiz bank (50 questions).
// Educational practice only; not an official licensing exam.
// Questions with a `fact` field reference a legal fact ID from src/content/legal.mjs.

export default [
  // ───────────── moto (13) ─────────────
  {
    id: 'q01', category: 'moto', lesson: 'helmet-why', fact: 'hn-moto-casco',
    es: {
      q: 'Según la Ley de Tránsito, ¿quién debe cumplir con el uso del casco protector en una moto?',
      options: ['Solo el conductor', 'El conductor y el pasajero', 'Solo el pasajero, si es menor de edad', 'Nadie, si el viaje es corto'],
      answer: 1,
      explain: 'La Ley de Tránsito considera infracción no cumplir con el casco protector, tanto para el conductor como para el pasajero. Un viaje corto no cambia nada: la cabeza de los dos está igual de expuesta.'
    },
    en: {
      q: 'Under the Ley de Tránsito, who must comply with the protective helmet requirement on a motorcycle?',
      options: ['Only the rider', 'The rider and the passenger', 'Only the passenger, if they are a minor', 'Nobody, if the trip is short'],
      answer: 1,
      explain: 'The Ley de Tránsito makes it an infraction not to comply with the protective helmet requirement for both the rider and the passenger. A short trip changes nothing: both heads are equally exposed.'
    }
  },
  {
    id: 'q02', category: 'moto', lesson: 'helmet-carried',
    es: {
      q: 'Vas en moto con el casco colgado del brazo porque “solo vas aquí cerca”. ¿Cuánta protección te da?',
      options: ['Bastante, porque lo tienes a mano', 'La mitad de la protección normal', 'Protege si te lo pones al ver peligro', 'Ninguna: el casco solo protege puesto y abrochado'],
      answer: 3,
      explain: 'Un casco en el brazo, en el manubrio o sin abrochar no protege tu cabeza en una caída. Además, colgado del brazo puede estorbarte para maniobrar. No hay tiempo para ponérselo cuando aparece el peligro.'
    },
    en: {
      q: 'You ride with your helmet hanging from your arm because you are “only going nearby”. How much protection does it give you?',
      options: ['Quite a lot, because it is close at hand', 'About half the normal protection', 'It protects if you put it on when you see danger', 'None: a helmet only protects when it is on and fastened'],
      answer: 3,
      explain: 'A helmet on your arm, on the handlebars or unfastened does not protect your head in a fall. Hanging from your arm, it can also get in the way of controlling the bike. There is never time to put it on once danger appears.'
    }
  },
  {
    id: 'q03', category: 'moto', lesson: 'helmet-fit',
    es: {
      q: '¿Cómo sabes que el casco te queda bien ajustado?',
      options: ['Queda firme, no se desliza al mover la cabeza y la correa va abrochada bajo la barbilla', 'Se mueve libremente para que no apriete', 'Te lo puedes quitar sin desabrochar la correa', 'Te cubre solo la parte de arriba de la cabeza'],
      answer: 0,
      explain: 'Un casco bien ajustado queda firme sin causar dolor, no se mueve cuando giras la cabeza y lleva la correa abrochada y ajustada. Si sale sin desabrocharlo, en un golpe también saldría.'
    },
    en: {
      q: 'How do you know your helmet fits properly?',
      options: ['It sits firmly, does not shift when you move your head, and the strap is fastened under your chin', 'It moves freely so it does not feel tight', 'You can take it off without undoing the strap', 'It covers only the top of your head'],
      answer: 0,
      explain: 'A well-fitted helmet sits firmly without causing pain, does not move when you turn your head, and has its strap fastened snugly. If it comes off without undoing the strap, it can also come off in an impact.'
    }
  },
  {
    id: 'q04', category: 'moto', lesson: 'helmet-fit',
    es: {
      q: 'Tu casco recibió un golpe fuerte en una caída, pero por fuera se ve casi bien. ¿Qué es lo más seguro?',
      options: ['Seguir usándolo mientras no esté quebrado', 'Pintarlo para cubrir los rayones', 'Dárselo al pasajero', 'Reemplazarlo, porque el interior que absorbe el golpe puede estar dañado'],
      answer: 3,
      explain: 'Un casco está hecho para absorber un impacto fuerte, y esa capacidad puede quedar dañada aunque por fuera se vea bien. Después de un golpe fuerte, lo recomendable es cambiarlo. Pasárselo al pasajero solo traslada el riesgo.'
    },
    en: {
      q: 'Your helmet took a hard hit in a fall, but on the outside it looks almost fine. What is the safest choice?',
      options: ['Keep using it as long as it is not cracked', 'Paint it to cover the scratches', 'Give it to your passenger', 'Replace it, because the inner layer that absorbs impact may be damaged'],
      answer: 3,
      explain: 'A helmet is designed to absorb one serious impact, and that ability can be lost even if the outside looks fine. After a hard hit, the recommendation is to replace it. Handing it to a passenger only moves the risk to them.'
    }
  },
  {
    id: 'q05', category: 'moto', lesson: 'moto-passengers', fact: 'hn-moto-dos-personas',
    es: {
      q: '¿Cuántas personas, como máximo, permite la Ley de Tránsito en una motocicleta?',
      options: ['Dos: el conductor y un pasajero', 'Tres, si una es un niño', 'Las que quepan en el asiento', 'Cuatro en motos grandes'],
      answer: 0,
      explain: 'La Ley de Tránsito considera infracción llevar más de dos personas en una moto. Cada persona extra cambia el equilibrio, alarga el frenado y deja a alguien sin espacio seguro.'
    },
    en: {
      q: 'What is the maximum number of people the Ley de Tránsito allows on a motorcycle?',
      options: ['Two: the rider and one passenger', 'Three, if one is a child', 'As many as fit on the seat', 'Four on large motorcycles'],
      answer: 0,
      explain: 'The Ley de Tránsito makes it an infraction to carry more than two people on a motorcycle. Every extra person changes the balance, lengthens braking and leaves someone without a safe place to sit.'
    }
  },
  {
    id: 'q06', category: 'moto', lesson: 'moto-passengers',
    es: {
      q: '¿Qué debe hacer un pasajero de moto para viajar seguro?',
      options: ['Inclinarse al lado contrario en las curvas para equilibrar', 'Bajarse antes de que la moto se detenga por completo', 'Ir de lado para subir y bajar más rápido', 'Llevar los pies en los reposapiés, sujetarse bien y acompañar el movimiento del conductor'],
      answer: 3,
      explain: 'El pasajero ayuda a la estabilidad cuando va bien sentado, con los pies en los reposapiés y siguiendo la inclinación del conductor. Moverse de golpe o inclinarse al contrario puede desequilibrar la moto.'
    },
    en: {
      q: 'What should a motorcycle passenger do to ride safely?',
      options: ['Lean the opposite way in bends to balance the bike', 'Get off before the bike has fully stopped', 'Sit side-saddle to get on and off faster', 'Keep their feet on the footpegs, hold on firmly and move with the rider'],
      answer: 3,
      explain: 'A passenger helps stability by sitting properly, keeping their feet on the footpegs and following the rider’s lean. Sudden movements or leaning the opposite way can unbalance the bike.'
    }
  },
  {
    id: 'q07', category: 'moto', lesson: 'moto-load-balance',
    es: {
      q: 'Necesitas llevar una caja grande en la moto. ¿Qué es lo más seguro?',
      options: ['Sostenerla con una mano mientras manejas', 'Ponerla sobre el tanque, aunque te tape la vista', 'Que el pasajero la cargue en alto sobre la cabeza', 'Si no cabe bien amarrada, baja y centrada, llevarla en otro vehículo'],
      answer: 3,
      explain: 'Una carga debe ir bien sujeta, baja y centrada, sin tapar luces ni vista y sin quitarte las manos del manubrio. Si no se puede llevar así, la moto no es el vehículo adecuado para ese viaje.'
    },
    en: {
      q: 'You need to carry a large box on your motorcycle. What is the safest choice?',
      options: ['Hold it with one hand while you ride', 'Put it on the tank, even if it blocks your view', 'Have your passenger hold it up over their head', 'If it cannot be strapped down low and centred, take it in another vehicle'],
      answer: 3,
      explain: 'A load must be secured, low and centred, without blocking lights or your view and without taking your hands off the handlebars. If it cannot be carried that way, a motorcycle is not the right vehicle for that trip.'
    }
  },
  {
    id: 'q08', category: 'moto', lesson: 'moto-braking',
    es: {
      q: '¿Cuál es la forma más segura de frenar fuerte en una moto en línea recta?',
      options: ['Usar solo el freno trasero', 'Usar solo el freno delantero de golpe', 'Usar los dos frenos de forma firme y progresiva', 'Apagar el motor y dejar que se detenga sola'],
      answer: 2,
      explain: 'El freno delantero da la mayor parte de la fuerza de frenado, pero usar los dos de forma progresiva detiene la moto en menos distancia y con más control. Apretar de golpe puede bloquear una rueda.'
    },
    en: {
      q: 'What is the safest way to brake hard on a motorcycle in a straight line?',
      options: ['Use only the rear brake', 'Grab only the front brake suddenly', 'Use both brakes firmly and progressively', 'Switch off the engine and let it roll to a stop'],
      answer: 2,
      explain: 'The front brake provides most of the stopping power, but using both progressively stops the bike in a shorter distance and with more control. Grabbing a brake suddenly can lock a wheel.'
    }
  },
  {
    id: 'q09', category: 'moto', lesson: 'moto-braking',
    es: {
      q: '¿Cuándo es más peligroso frenar fuerte en una moto?',
      options: ['En una recta seca', 'Al llegar despacio a un alto', 'Con la moto inclinada en plena curva', 'Con el pasajero bien sentado'],
      answer: 2,
      explain: 'Con la moto inclinada, las llantas ya están usando agarre para girar y un frenazo puede hacer que se deslicen. Lo seguro es frenar antes de la curva, con la moto derecha.'
    },
    en: {
      q: 'When is braking hard on a motorcycle most dangerous?',
      options: ['On a dry, straight road', 'When arriving slowly at a stop sign', 'While leaning over in the middle of a bend', 'With the passenger seated properly'],
      answer: 2,
      explain: 'When the bike is leaning, the tyres are already using grip to turn, and hard braking can make them slide. The safe habit is to brake before the bend, with the bike upright.'
    }
  },
  {
    id: 'q10', category: 'moto', lesson: 'stunts-wheelies',
    es: {
      q: 'Un amigo quiere enseñarte a hacer caballito en la calle principal. ¿Qué respondes?',
      options: ['Que sí, si no hay muchos carros', 'Que sí, pero solo de noche', 'Que sí, si el pasajero se agarra fuerte', 'Que no: en la vía pública pone en riesgo a todos y basta un error para perder el control'],
      answer: 3,
      explain: 'Con un caballito, la rueda delantera pierde contacto con el suelo y con ella buena parte del control y la capacidad de frenar. En la vía pública el riesgo lo cargan también peatones, pasajeros y otros conductores.'
    },
    en: {
      q: 'A friend wants to teach you to pull a wheelie on the main road. What do you say?',
      options: ['Yes, if there are not many cars', 'Yes, but only at night', 'Yes, if the passenger holds on tight', 'No: on a public road it puts everyone at risk, and one mistake means losing control'],
      answer: 3,
      explain: 'In a wheelie the front wheel leaves the ground, and with it much of your steering and braking. On a public road the risk also falls on pedestrians, passengers and other road users.'
    }
  },
  {
    id: 'q11', category: 'moto', lesson: 'group-riding',
    es: {
      q: 'Vas en grupo con otras motos. ¿Qué práctica es la más segura?',
      options: ['Ir en paralelo, uno al lado del otro, para conversar', 'Seguir muy pegado al de adelante para no perder al grupo', 'Acelerar para alcanzar al que va primero', 'Mantener tu propio ritmo y suficiente distancia, sin competir con los demás'],
      answer: 3,
      explain: 'En grupo, cada quien necesita espacio para frenar y esquivar. Ir pegados o en paralelo quita ese espacio, y tratar de alcanzar a otros empuja a ir más rápido de lo que te sientes cómodo.'
    },
    en: {
      q: 'You are riding in a group with other motorcycles. Which practice is safest?',
      options: ['Riding side by side so you can talk', 'Staying right behind the rider ahead so you do not lose the group', 'Speeding up to catch the leader', 'Keeping your own pace and enough distance, without competing'],
      answer: 3,
      explain: 'In a group, each rider needs space to brake and swerve. Riding close or side by side removes that space, and trying to keep up pushes you faster than you are comfortable with.'
    }
  },
  {
    id: 'q12', category: 'moto', lesson: 'helmet-why',
    es: {
      q: '¿Qué tipo de casco ofrece más protección para la cara y la mandíbula?',
      options: ['Un casco integral (cerrado) bien ajustado', 'Una gorra gruesa', 'Un casco de construcción', 'Un casco abierto sin abrochar'],
      answer: 0,
      explain: 'El casco integral cubre también la mandíbula y la cara, zonas que suelen golpearse en una caída. Una gorra o un casco de construcción no están diseñados para un impacto en carretera.'
    },
    en: {
      q: 'Which type of helmet gives the most protection to the face and jaw?',
      options: ['A well-fitted full-face helmet', 'A thick cap', 'A construction hard hat', 'An open-face helmet left unfastened'],
      answer: 0,
      explain: 'A full-face helmet also covers the jaw and face, areas often hit in a fall. A cap or a hard hat is not designed for a road impact.'
    }
  },
  {
    id: 'q13', category: 'moto', lesson: 'blind-spots',
    es: {
      q: 'Vas en moto detrás de un camión. ¿Cómo sabes si el conductor probablemente no te ve?',
      options: ['Si vas por el centro de tu carril', 'Si llevas las luces encendidas', 'Si tú no puedes ver sus espejos, él tampoco te ve a ti', 'Si el camión va despacio'],
      answer: 2,
      explain: 'Los vehículos grandes tienen puntos ciegos amplios, sobre todo justo detrás y a los lados. Una regla práctica: si no ves los espejos del conductor, él no puede verte en ellos.'
    },
    en: {
      q: 'You are riding behind a truck. How can you tell the driver probably cannot see you?',
      options: ['If you are in the centre of your lane', 'If your lights are on', 'If you cannot see the truck’s mirrors, the driver cannot see you', 'If the truck is moving slowly'],
      answer: 2,
      explain: 'Large vehicles have wide blind spots, especially directly behind and alongside. A practical rule: if you cannot see the driver’s mirrors, the driver cannot see you in them.'
    }
  },

  // ───────────── velocidad (5) ─────────────
  {
    id: 'q14', category: 'velocidad', lesson: 'stopping-distance',
    es: {
      q: 'La distancia total para detenerte se compone de…',
      options: ['Solo la distancia de frenado', 'La distancia que recorres mientras reaccionas más la distancia de frenado', 'El largo de tu vehículo', 'La distancia hasta el próximo alto'],
      answer: 1,
      explain: 'Antes de frenar, tu cerebro necesita tiempo para ver el peligro y mover el pie o la mano; mientras tanto sigues avanzando. Después empieza el frenado. Las dos distancias crecen con la velocidad.'
    },
    en: {
      q: 'Your total stopping distance is made up of…',
      options: ['Only the braking distance', 'The distance you travel while reacting plus the braking distance', 'The length of your vehicle', 'The distance to the next stop sign'],
      answer: 1,
      explain: 'Before you brake, your brain needs time to see the hazard and move your foot or hand, and meanwhile you keep moving. Then braking begins. Both distances grow with speed.'
    }
  },
  {
    id: 'q15', category: 'velocidad', lesson: 'stopping-distance',
    es: {
      q: 'Si duplicas tu velocidad, ¿qué pasa con la distancia de frenado?',
      options: ['Se mantiene igual', 'Se duplica', 'Se reduce a la mitad', 'Crece mucho más: aproximadamente se multiplica por cuatro'],
      answer: 3,
      explain: 'La distancia de frenado aumenta con el cuadrado de la velocidad: al doble de velocidad necesitas unas cuatro veces más distancia para frenar. Por eso unos pocos kilómetros por hora de más importan tanto.'
    },
    en: {
      q: 'If you double your speed, what happens to your braking distance?',
      options: ['It stays the same', 'It doubles', 'It halves', 'It grows much more: roughly four times as long'],
      answer: 3,
      explain: 'Braking distance increases with the square of speed: at twice the speed you need about four times the distance to brake. That is why a little extra speed matters so much.'
    }
  },
  {
    id: 'q16', category: 'velocidad', lesson: 'following-distance',
    es: {
      q: '¿Cuál es una forma práctica de medir si llevas suficiente distancia con el vehículo de adelante?',
      options: ['Elegir un punto fijo y contar los segundos desde que él lo pasa hasta que tú lo pasas', 'Ir lo bastante cerca para leer su placa', 'Mantener el largo de un carro sin importar la velocidad', 'Calcularlo a ojo según el tráfico'],
      answer: 0,
      explain: 'Contar segundos funciona a cualquier velocidad: cuanto más rápido vas, más metros cubren esos segundos. Si llegas al punto antes de terminar de contar, vas demasiado cerca.'
    },
    en: {
      q: 'What is a practical way to check whether you have enough distance from the vehicle ahead?',
      options: ['Pick a fixed point and count the seconds from when it passes the point until you do', 'Stay close enough to read its number plate', 'Keep one car length no matter your speed', 'Judge it by eye depending on traffic'],
      answer: 0,
      explain: 'Counting seconds works at any speed: the faster you go, the more ground those seconds cover. If you reach the point before you finish counting, you are too close.'
    }
  },
  {
    id: 'q17', category: 'velocidad', lesson: 'following-distance',
    es: {
      q: 'Empieza a llover. ¿Qué haces con tu distancia de seguimiento?',
      options: ['La mantengo igual', 'La reduzco para ver mejor las luces del de adelante', 'La aumento, porque en mojado se tarda más en frenar', 'Depende de si llevo prisa'],
      answer: 2,
      explain: 'Con la calle mojada las llantas tienen menos agarre y la distancia de frenado aumenta. Dejar más espacio te da tiempo para reaccionar y frenar suave.'
    },
    en: {
      q: 'It starts to rain. What do you do with your following distance?',
      options: ['Keep it the same', 'Reduce it to see the lights ahead more clearly', 'Increase it, because stopping takes longer on a wet road', 'It depends on whether I am in a hurry'],
      answer: 2,
      explain: 'On a wet road your tyres have less grip and braking distance increases. Leaving more space gives you time to react and brake gently.'
    }
  },
  {
    id: 'q18', category: 'velocidad', lesson: 'stopping-distance', fact: 'hn-velocidad',
    es: {
      q: '¿Qué velocidad máxima debes respetar?',
      options: ['La que usa el resto del tráfico', 'El límite indicado por la señalización, y menos si las condiciones lo piden', 'La máxima que permita tu vehículo', 'Cualquiera, si la calle está vacía'],
      answer: 1,
      explain: 'La ley pide respetar los límites de velocidad indicados por la señalización, y exceder la velocidad es una infracción grave. El límite es un máximo: con lluvia, curvas, peatones o poca visibilidad, lo seguro es ir más despacio.'
    },
    en: {
      q: 'What maximum speed must you respect?',
      options: ['Whatever the rest of the traffic is doing', 'The limit shown on the signs, and slower when conditions call for it', 'The top speed your vehicle can reach', 'Any speed, if the road is empty'],
      answer: 1,
      explain: 'The law requires drivers to respect the speed limits shown on signs, and speeding is a serious infraction. A limit is a maximum: in rain, on bends, near pedestrians or with poor visibility, the safe choice is to go slower.'
    }
  },

  // ───────────── adelantar (4) ─────────────
  {
    id: 'q19', category: 'adelantar', lesson: 'safe-overtaking',
    es: {
      q: '¿En cuál de estas situaciones nunca deberías rebasar?',
      options: ['En una recta larga con buena visibilidad y sin tráfico de frente', 'Detrás de una bicicleta en una recta despejada', 'En una curva o en la cima de una cuesta', 'Cuando el vehículo de adelante te hace espacio en una recta'],
      answer: 2,
      explain: 'En una curva o en la cima de una cuesta no puedes ver lo que viene de frente. Si aparece un vehículo, no tendrás espacio ni tiempo para regresar a tu carril.'
    },
    en: {
      q: 'In which of these situations should you never overtake?',
      options: ['On a long straight with good visibility and no oncoming traffic', 'Behind a bicycle on a clear straight road', 'On a bend or at the crest of a hill', 'When the vehicle ahead makes room for you on a straight'],
      answer: 2,
      explain: 'On a bend or at the crest of a hill you cannot see what is coming towards you. If a vehicle appears, you will have neither the space nor the time to get back into your lane.'
    }
  },
  {
    id: 'q20', category: 'adelantar', lesson: 'safe-overtaking',
    es: {
      q: 'Antes de rebasar, ¿qué debes hacer?',
      options: ['Pegarte al vehículo de adelante para salir más rápido', 'Sonar el pito y salir de inmediato', 'Revisar espejos, confirmar que el carril contrario está libre lo suficiente, señalizar y entonces rebasar', 'Rebasar por la derecha si hay cuneta'],
      answer: 2,
      explain: 'Pegarte al de adelante te quita visibilidad. Lo seguro es mantener distancia, mirar espejos, confirmar que tienes espacio de sobra, señalizar y completar la maniobra sin dudar. Si tienes dudas, no rebases.'
    },
    en: {
      q: 'Before overtaking, what should you do?',
      options: ['Get right behind the vehicle ahead so you can pull out faster', 'Sound your horn and pull out immediately', 'Check your mirrors, confirm the opposite lane is clear for long enough, signal, then overtake', 'Pass on the right if there is a gutter'],
      answer: 2,
      explain: 'Sitting right behind the vehicle ahead blocks your view. The safe way is to keep your distance, check mirrors, confirm you have plenty of room, signal and complete the move decisively. If in doubt, do not overtake.'
    }
  },
  {
    id: 'q21', category: 'adelantar', lesson: 'safe-overtaking',
    es: {
      q: 'Alguien te está rebasando. ¿Cuál es la reacción más segura?',
      options: ['Acelerar para que no te pase', 'Mantenerte a tu derecha, a velocidad constante o soltando un poco el acelerador', 'Moverte al centro de la calle', 'Frenar de golpe'],
      answer: 1,
      explain: 'Facilitar el rebase reduce el tiempo que el otro vehículo pasa en el carril contrario. Acelerar o frenar de golpe lo deja atrapado o te pone en peligro a ti.'
    },
    en: {
      q: 'Someone is overtaking you. What is the safest reaction?',
      options: ['Speed up so they cannot pass', 'Keep to your right, holding a steady speed or easing off slightly', 'Move towards the middle of the road', 'Brake suddenly'],
      answer: 1,
      explain: 'Making the overtake easier shortens the time the other vehicle spends in the opposite lane. Speeding up or braking suddenly can trap them or put you in danger.'
    }
  },
  {
    id: 'q22', category: 'adelantar', lesson: 'safe-overtaking',
    es: {
      q: 'Vas detrás de un vehículo lento en un tramo con muchas curvas. ¿Qué es lo más sensato?',
      options: ['Esperar con paciencia a un tramo recto y despejado', 'Rebasar en la curva si no oyes nada', 'Rebasar por la cuneta', 'Seguirlo muy de cerca para presionarlo'],
      answer: 0,
      explain: 'Unos minutos detrás de un vehículo lento casi nunca cambian tu día. Rebasar sin ver lo que viene sí puede cambiarlo para siempre.'
    },
    en: {
      q: 'You are behind a slow vehicle on a stretch with many bends. What is the sensible choice?',
      options: ['Wait patiently for a clear, straight stretch', 'Overtake on the bend if you cannot hear anything coming', 'Pass on the gutter side', 'Follow very closely to pressure them'],
      answer: 0,
      explain: 'A few minutes behind a slow vehicle rarely changes your day. Overtaking without seeing what is coming can change it forever.'
    }
  },

  // ───────────── intersecciones (3) ─────────────
  {
    id: 'q23', category: 'intersecciones', lesson: 'intersections-turning',
    es: {
      q: 'Vas en moto y un carro de frente espera para girar cruzando tu carril. ¿Qué haces?',
      options: ['Mantener la velocidad: tienes derecho de vía', 'Pitar y acelerar para pasar primero', 'Reducir la velocidad, preparar el freno y asumir que quizá no te ha visto', 'Pasar pegado a su lado'],
      answer: 2,
      explain: 'Un vehículo que gira cruzando el camino de una moto es una situación de alto riesgo, porque al conductor le cuesta ver o calcular la velocidad de una moto. Tener derecho de vía no te protege si el otro no te ve.'
    },
    en: {
      q: 'You are on a motorcycle and an oncoming car is waiting to turn across your lane. What do you do?',
      options: ['Keep your speed: you have the right of way', 'Sound your horn and accelerate to get through first', 'Slow down, cover your brake and assume they may not have seen you', 'Pass very close beside it'],
      answer: 2,
      explain: 'A vehicle turning across a motorcycle’s path is a high-risk situation, because drivers find motorcycles hard to see and their speed hard to judge. Having the right of way does not protect you if the other driver does not see you.'
    }
  },
  {
    id: 'q24', category: 'intersecciones', lesson: 'watch-for-motorcycles',
    es: {
      q: 'Manejas un carro y vas a girar en una intersección. ¿Qué hábito ayuda a no chocar con una moto?',
      options: ['Mirar una sola vez rápido', 'Confiar en que la moto frenará', 'Girar rápido para despejar la intersección', 'Mirar dos veces, con calma, buscando específicamente motos'],
      answer: 3,
      explain: 'Una moto es estrecha y puede quedar oculta tras un poste, otro vehículo o el marco del parabrisas. Mirar dos veces y buscar motos a propósito reduce el riesgo de no verla.'
    },
    en: {
      q: 'You are driving a car and about to turn at an intersection. Which habit helps you avoid hitting a motorcycle?',
      options: ['Take one quick look', 'Trust that the motorcycle will brake', 'Turn quickly to clear the intersection', 'Look twice, calmly, specifically searching for motorcycles'],
      answer: 3,
      explain: 'A motorcycle is narrow and can be hidden behind a post, another vehicle or the car’s windscreen pillar. Looking twice and deliberately searching for motorcycles lowers the chance of missing one.'
    }
  },
  {
    id: 'q25', category: 'intersecciones', lesson: 'intersections-turning',
    es: {
      q: 'Llegas a una intersección y un vehículo grande estacionado te tapa la vista de la calle transversal. ¿Qué haces?',
      options: ['Avanzar despacio, poco a poco, hasta poder ver bien antes de entrar', 'Entrar rápido para pasar cuanto antes', 'Pitar y entrar sin mirar', 'Seguir al vehículo de adelante sin detenerte'],
      answer: 0,
      explain: 'Si no puedes ver, no puedes decidir con seguridad. Avanzar despacio te deja asomarte y ver el tráfico sin meterte de golpe en el camino de otro.'
    },
    en: {
      q: 'You reach an intersection and a large parked vehicle blocks your view of the cross street. What do you do?',
      options: ['Edge forward slowly until you can see clearly before entering', 'Go in quickly to get through as fast as possible', 'Sound your horn and go without looking', 'Follow the vehicle ahead without stopping'],
      answer: 0,
      explain: 'If you cannot see, you cannot decide safely. Edging forward slowly lets you look out and see the traffic without suddenly putting yourself in someone’s path.'
    }
  },

  // ───────────── normas (3) ─────────────
  {
    id: 'q26', category: 'normas', lesson: 'road-markings',
    es: {
      q: '¿Qué significa una señal de ALTO?',
      options: ['Reducir la velocidad y seguir si no viene nadie', 'Detenerte por completo, mirar y avanzar solo cuando sea seguro', 'Pitar antes de cruzar', 'Que la otra calle debe detenerse'],
      answer: 1,
      explain: 'ALTO pide una detención completa, aunque parezca que no viene nadie. Solo después de mirar bien en todas las direcciones avanzas.'
    },
    en: {
      q: 'What does an ALTO (STOP) sign mean?',
      options: ['Slow down and continue if nobody is coming', 'Come to a complete stop, look, and go only when it is safe', 'Sound your horn before crossing', 'That the other road must stop'],
      answer: 1,
      explain: 'ALTO requires a complete stop, even if it looks like nobody is coming. Only after looking carefully in every direction do you move off.'
    }
  },
  {
    id: 'q27', category: 'normas', lesson: 'road-markings',
    es: {
      q: '¿Qué significa una señal de CEDA EL PASO?',
      options: ['Que tienes prioridad sobre los demás', 'Que debes detenerte siempre, aunque no venga nadie', 'Reducir la velocidad y dejar pasar a quien tiene prioridad; detenerte si hace falta', 'Que está prohibido girar'],
      answer: 2,
      explain: 'CEDA EL PASO significa que los otros vehículos y peatones tienen prioridad. Si la vía está libre puedes seguir sin detenerte, pero si viene alguien debes esperar.'
    },
    en: {
      q: 'What does a CEDA EL PASO (YIELD / GIVE WAY) sign mean?',
      options: ['That you have priority over others', 'That you must always stop, even if nobody is coming', 'Slow down and let those with priority go first; stop if necessary', 'That turning is prohibited'],
      answer: 2,
      explain: 'CEDA EL PASO means other vehicles and pedestrians have priority. If the way is clear you may continue without stopping, but if someone is coming you must wait.'
    }
  },
  {
    id: 'q28', category: 'normas', lesson: 'road-markings',
    es: {
      q: 'En el centro de la carretera hay una línea continua de tu lado. ¿Qué te indica?',
      options: ['Que puedes rebasar si vas rápido', 'Que no debes cruzarla para rebasar', 'Que la carretera termina pronto', 'Que solo las motos pueden cruzarla'],
      answer: 1,
      explain: 'La línea continua marca tramos donde rebasar es peligroso, por ejemplo por falta de visibilidad. La línea discontinua permite rebasar solo cuando además es seguro hacerlo.'
    },
    en: {
      q: 'There is a solid line in the centre of the road on your side. What does it tell you?',
      options: ['That you may overtake if you are fast', 'That you must not cross it to overtake', 'That the road ends soon', 'That only motorcycles may cross it'],
      answer: 1,
      explain: 'A solid line marks stretches where overtaking is dangerous, for example because of poor visibility. A broken line allows overtaking only when it is also safe to do so.'
    }
  },

  // ───────────── defensivo (5) ─────────────
  {
    id: 'q29', category: 'defensivo', lesson: 'rain-riding',
    es: {
      q: '¿Cuándo suele estar más resbalosa la calle con la lluvia?',
      options: ['Después de varios días de lluvia continua', 'En los primeros minutos, cuando el agua se mezcla con aceite y polvo', 'Solo de noche', 'Nunca, si la calle es de concreto'],
      answer: 1,
      explain: 'Al empezar a llover, el agua levanta el aceite y la suciedad acumulados y forma una capa resbalosa. Es el momento de reducir velocidad y evitar maniobras bruscas.'
    },
    en: {
      q: 'When is the road usually most slippery in the rain?',
      options: ['After several days of continuous rain', 'In the first minutes, when water mixes with oil and dust', 'Only at night', 'Never, if the road is concrete'],
      answer: 1,
      explain: 'When rain begins, water lifts accumulated oil and dirt and forms a slippery film. That is the time to slow down and avoid sudden manoeuvres.'
    }
  },
  {
    id: 'q30', category: 'defensivo', lesson: 'rain-riding',
    es: {
      q: 'Vas en moto con lluvia. ¿Qué superficies conviene evitar o cruzar con mucho cuidado?',
      options: ['Pintura de la calle, tapas metálicas y charcos', 'El centro de tu carril cuando está limpio', 'Las rectas', 'El asfalto seco bajo un árbol'],
      answer: 0,
      explain: 'La pintura, el metal y los charcos (que pueden esconder hoyos) tienen muy poco agarre en mojado. Crúzalos con la moto derecha, sin frenar ni acelerar fuerte.'
    },
    en: {
      q: 'You are riding a motorcycle in the rain. Which surfaces should you avoid or cross with great care?',
      options: ['Road paint, metal covers and puddles', 'The centre of your lane when it is clean', 'Straight stretches', 'Dry asphalt under a tree'],
      answer: 0,
      explain: 'Paint, metal and puddles (which can hide potholes) have very little grip when wet. Cross them with the bike upright, without hard braking or acceleration.'
    }
  },
  {
    id: 'q31', category: 'defensivo', lesson: 'calm-driving',
    es: {
      q: 'Otro conductor te cierra el paso y luego te hace señas. ¿Cuál es la reacción más segura?',
      options: ['Perseguirlo para reclamarle', 'Cerrarle el paso tú también', 'Dejar distancia, no responder y seguir tu camino con calma', 'Frenar delante de él para darle una lección'],
      answer: 2,
      explain: 'Responder a la agresión convierte un mal momento en un riesgo serio para los dos. Dejar espacio y no engancharte es la forma de manejar defensivamente.'
    },
    en: {
      q: 'Another driver cuts you off and then gestures at you. What is the safest reaction?',
      options: ['Chase them to confront them', 'Cut them off in return', 'Leave space, do not respond and carry on calmly', 'Brake in front of them to teach them a lesson'],
      answer: 2,
      explain: 'Responding to aggression turns a bad moment into a serious risk for both of you. Leaving space and not getting drawn in is what defensive driving looks like.'
    }
  },
  {
    id: 'q32', category: 'defensivo', lesson: 'calm-driving',
    es: {
      q: 'Te entra un mensaje en el teléfono mientras manejas. ¿Qué es lo más seguro?',
      options: ['Leerlo rápido en un tramo recto', 'Contestar con mensaje de voz sin soltar el volante', 'Leerlo en el siguiente alto', 'Ignorarlo hasta detenerte en un lugar seguro, fuera de la vía'],
      answer: 3,
      explain: 'Mirar el teléfono aunque sea unos segundos significa avanzar a ciegas varios metros. Incluso en un alto, tu atención debe estar en la vía. Para usarlo, detente en un lugar seguro.'
    },
    en: {
      q: 'A message arrives on your phone while you are driving. What is the safest thing to do?',
      options: ['Read it quickly on a straight stretch', 'Reply with a voice message without letting go of the wheel', 'Read it at the next stop sign', 'Ignore it until you have stopped in a safe place, off the road'],
      answer: 3,
      explain: 'Looking at a phone for even a few seconds means travelling blind for many metres. Even at a stop, your attention belongs on the road. To use it, stop somewhere safe.'
    }
  },
  {
    id: 'q33', category: 'defensivo', lesson: 'blind-spots',
    es: {
      q: 'Antes de cambiar de carril o salir de donde estás estacionado, ¿qué debes hacer además de mirar los espejos?',
      options: ['Nada más, los espejos lo muestran todo', 'Girar la cabeza para revisar el punto ciego', 'Pitar dos veces', 'Acelerar para salir rápido'],
      answer: 1,
      explain: 'Los espejos dejan zonas que no muestran, donde puede caber una moto o una persona. Una mirada rápida por encima del hombro cubre ese punto ciego.'
    },
    en: {
      q: 'Before changing lanes or pulling out from a parked position, what should you do as well as checking your mirrors?',
      options: ['Nothing else, mirrors show everything', 'Turn your head to check your blind spot', 'Sound your horn twice', 'Accelerate to pull out quickly'],
      answer: 1,
      explain: 'Mirrors leave areas they do not show, where a motorcycle or a person can fit. A quick look over your shoulder covers that blind spot.'
    }
  },

  // ───────────── peatones (3) ─────────────
  {
    id: 'q34', category: 'peatones', lesson: 'pedestrian-safety',
    es: {
      q: 'Caminas por una carretera sin acera. ¿Por dónde es más seguro ir?',
      options: ['Por el lado donde vienen los vehículos de frente, lo más a la orilla posible', 'Por el centro de la calle', 'De espaldas al tráfico, para que te vean los conductores', 'Cambiando de lado según la sombra'],
      answer: 0,
      explain: 'Caminar de frente al tráfico te permite ver los vehículos que se acercan y apartarte a tiempo. Mantente lo más a la orilla posible y, de noche, lleva algo claro o reflectivo.'
    },
    en: {
      q: 'You are walking along a road with no pavement. Where is it safest to walk?',
      options: ['On the side facing oncoming traffic, as far to the edge as possible', 'In the middle of the road', 'With your back to traffic, so drivers can see you', 'Switching sides depending on the shade'],
      answer: 0,
      explain: 'Walking facing traffic lets you see vehicles approaching and step aside in time. Keep as close to the edge as you can and, at night, wear something light or reflective.'
    }
  },
  {
    id: 'q35', category: 'peatones', lesson: 'pedestrian-safety',
    es: {
      q: 'El vehículo del carril de al lado se detiene antes de un paso peatonal. ¿Qué haces?',
      options: ['Lo rebasas, porque tu carril está libre', 'Pitas para avisar y sigues', 'Reduces y te preparas para detenerte: puede estar dejando pasar a alguien que tú no ves', 'Aceleras para pasar antes que el peatón'],
      answer: 2,
      explain: 'Un vehículo detenido puede tapar a un peatón que está cruzando, sobre todo a un niño. Si alguien se detiene antes de un paso peatonal, asume que hay una razón.'
    },
    en: {
      q: 'The vehicle in the next lane stops before a pedestrian crossing. What do you do?',
      options: ['Overtake it, because your lane is clear', 'Sound your horn as a warning and keep going', 'Slow down and be ready to stop: it may be letting someone cross whom you cannot see', 'Speed up to get past before the pedestrian'],
      answer: 2,
      explain: 'A stopped vehicle can hide a pedestrian who is crossing, especially a child. If someone stops before a crossing, assume there is a reason.'
    }
  },
  {
    id: 'q36', category: 'peatones', lesson: 'pedestrian-safety',
    es: {
      q: '¿Por qué es tan importante reducir la velocidad donde hay peatones, como cerca de escuelas?',
      options: ['Porque los peatones siempre cruzan por el paso peatonal', 'Porque a menor velocidad puedes detenerte antes y, si hay un golpe, es mucho menos grave', 'Solo para evitar multas', 'No es tan importante si pitas'],
      answer: 1,
      explain: 'Según la OMS, el riesgo de lesiones graves para un peatón aumenta rápidamente con la velocidad del impacto. Ir despacio te da tiempo para frenar y reduce mucho el daño si no logras evitar el golpe.'
    },
    en: {
      q: 'Why is it so important to slow down where there are pedestrians, such as near schools?',
      options: ['Because pedestrians always cross at the crossing', 'Because at lower speed you can stop sooner and, if there is an impact, it is far less severe', 'Only to avoid fines', 'It is not that important if you sound your horn'],
      answer: 1,
      explain: 'According to the WHO, a pedestrian’s risk of serious injury rises steeply with impact speed. Going slowly gives you time to brake and greatly reduces harm if you cannot avoid a collision.'
    }
  },

  // ───────────── familias (3) ─────────────
  {
    id: 'q37', category: 'familias', lesson: 'seatbelts-children', fact: 'hn-cinturon',
    es: {
      q: 'Según la Ley de Tránsito, ¿quiénes deben usar el cinturón de seguridad en un carro?',
      options: ['El conductor y todos los pasajeros', 'Solo el conductor', 'Solo quien va adelante', 'Solo en carretera, no en el pueblo'],
      answer: 0,
      explain: 'La Ley de Tránsito considera infracción que el conductor y los pasajeros no usen el cinturón. Un pasajero sin cinturón atrás también puede salir disparado hacia adelante y lesionar a otros.'
    },
    en: {
      q: 'Under the Ley de Tránsito, who must wear a seatbelt in a car?',
      options: ['The driver and all passengers', 'Only the driver', 'Only those in the front', 'Only on the highway, not in town'],
      answer: 0,
      explain: 'The Ley de Tránsito makes it an infraction for the driver and passengers not to wear seatbelts. An unbelted rear passenger can also be thrown forward and injure others.'
    }
  },
  {
    id: 'q38', category: 'familias', lesson: 'seatbelts-children',
    es: {
      q: '¿Cuál es la forma más segura de llevar a un niño pequeño en un carro?',
      options: ['En brazos de un adulto en el asiento delantero', 'En el asiento trasero, en un asiento infantil adecuado a su edad y tamaño', 'Compartiendo cinturón con un adulto', 'De pie entre los asientos para que vea'],
      answer: 1,
      explain: 'En un frenazo, nadie puede sostener a un niño en brazos. Los expertos recomiendan llevar a los niños atrás, en un sistema de retención adecuado a su edad y tamaño, bien instalado.'
    },
    en: {
      q: 'What is the safest way to carry a young child in a car?',
      options: ['On an adult’s lap in the front seat', 'In the back seat, in a child seat suited to their age and size', 'Sharing a seatbelt with an adult', 'Standing between the seats so they can see'],
      answer: 1,
      explain: 'In a sudden stop, nobody can hold on to a child in their arms. Experts recommend carrying children in the back, in a properly installed restraint suited to their age and size.'
    }
  },
  {
    id: 'q39', category: 'familias', lesson: 'seatbelts-children',
    es: {
      q: '¿Cómo debe ir colocado el cinturón de seguridad?',
      options: ['La banda del hombro por detrás de la espalda', 'Flojo, para ir más cómodo', 'La banda baja sobre la cadera y la del hombro cruzando el pecho, sin torcer', 'Abrochado solo sobre el estómago'],
      answer: 2,
      explain: 'El cinturón protege cuando la fuerza cae sobre los huesos fuertes: cadera, pecho y hombro. Flojo o mal colocado, puede no sujetarte o causar lesiones.'
    },
    en: {
      q: 'How should a seatbelt be worn?',
      options: ['With the shoulder strap behind your back', 'Loose, for comfort', 'Lap belt low across the hips and shoulder strap across the chest, not twisted', 'Fastened only across the stomach'],
      answer: 2,
      explain: 'A seatbelt protects when the force lands on strong bones: hips, chest and shoulder. Loose or badly positioned, it may not hold you or may cause injury.'
    }
  },

  // ───────────── nuevos (2) ─────────────
  {
    id: 'q40', category: 'nuevos', lesson: 'new-drivers', fact: 'hn-licencia',
    es: {
      q: '¿Qué se necesita para conducir legalmente en Honduras?',
      options: ['Solo saber manejar', 'Tener el permiso de los papás', 'Ser dueño del vehículo', 'Una licencia vigente para la categoría de vehículo, emitida por la DNVT'],
      answer: 3,
      explain: 'Conducir requiere una licencia válida para la categoría del vehículo, emitida por la autoridad nacional de tránsito (DNVT). Saber mover un vehículo no es lo mismo que estar preparado para la vía.'
    },
    en: {
      q: 'What do you need to drive legally in Honduras?',
      options: ['Just knowing how to drive', 'Your parents’ permission', 'To own the vehicle', 'A valid licence for the vehicle category, issued by the DNVT'],
      answer: 3,
      explain: 'Driving requires a valid licence for the vehicle category, issued by the national traffic authority (DNVT). Being able to move a vehicle is not the same as being ready for the road.'
    }
  },
  {
    id: 'q41', category: 'nuevos', lesson: 'new-drivers',
    es: {
      q: 'Acabas de aprender a manejar. ¿Qué te ayuda más a ganar experiencia con seguridad?',
      options: ['Practicar con un conductor experimentado, empezando por calles tranquilas y de día', 'Llevar a varios amigos para que te den ánimo', 'Salir de noche cuando hay menos tráfico', 'Probar tu velocidad en la carretera principal'],
      answer: 0,
      explain: 'La experiencia se construye poco a poco. Practicar de día, en calles tranquilas y con alguien experimentado al lado te permite aprender sin enfrentar todos los riesgos a la vez. Los amigos en el carro suelen distraer.'
    },
    en: {
      q: 'You have just learned to drive. What helps you most to gain experience safely?',
      options: ['Practising with an experienced driver, starting on quiet roads in daylight', 'Bringing several friends along for encouragement', 'Going out at night when there is less traffic', 'Testing your speed on the main road'],
      answer: 0,
      explain: 'Experience builds step by step. Practising in daylight, on quiet roads, with someone experienced beside you lets you learn without facing every risk at once. Friends in the car tend to be a distraction.'
    }
  },

  // ───────────── noche (3) ─────────────
  {
    id: 'q42', category: 'noche', lesson: 'night-visibility', fact: 'hn-moto-reflectivo',
    es: {
      q: 'Desde la reforma de marzo de 2026, ¿en qué horario deben llevar chaleco o distintivo reflectivo el conductor y el pasajero de una moto?',
      options: ['Solo cuando llueve', 'Solo en carretera fuera del pueblo', 'Únicamente a medianoche', 'De 6:00 p.m. a 6:00 a.m.'],
      answer: 3,
      explain: 'La reforma de 2026 (Decreto 22-2026) exige chaleco o distintivo reflectivo para conductores y pasajeros entre las 6:00 p.m. y las 6:00 a.m. El reflectivo devuelve la luz de los faros y hace que te vean mucho antes.'
    },
    en: {
      q: 'Since the March 2026 reform, during what hours must a motorcycle rider and passenger wear a reflective vest or marking?',
      options: ['Only when it rains', 'Only on highways outside town', 'Only around midnight', 'From 6:00 p.m. to 6:00 a.m.'],
      answer: 3,
      explain: 'The 2026 reform (Decreto 22-2026) requires riders and passengers to wear a reflective vest or marking between 6:00 p.m. and 6:00 a.m. Reflective material bounces headlight beams back and gets you seen much sooner.'
    }
  },
  {
    id: 'q43', category: 'noche', lesson: 'night-visibility',
    es: {
      q: 'De noche, un vehículo viene de frente y llevas las luces altas. ¿Qué haces?',
      options: ['Las dejas altas para ver mejor', 'Cambias a luces bajas para no deslumbrarlo', 'Apagas las luces un momento', 'Le haces cambio de luces varias veces'],
      answer: 1,
      explain: 'Las luces altas deslumbran al que viene de frente y lo dejan sin ver por unos segundos, lo cual es peligroso para los dos. Cambia a bajas y vuelve a altas cuando haya pasado.'
    },
    en: {
      q: 'At night, a vehicle is coming towards you and your high beams are on. What do you do?',
      options: ['Leave them on to see better', 'Switch to low beams so you do not dazzle the other driver', 'Turn your lights off for a moment', 'Flash your lights several times'],
      answer: 1,
      explain: 'High beams dazzle oncoming drivers and leave them unable to see for a few seconds, which is dangerous for both of you. Dip to low beams and switch back once they have passed.'
    }
  },
  {
    id: 'q44', category: 'noche', lesson: 'night-visibility',
    es: {
      q: 'Vas en moto de noche. ¿Qué afecta más a tu capacidad de ver la calle?',
      options: ['El color de la moto', 'Llevar el casco bien abrochado', 'Una visera rayada o sucia', 'Llevar los dos espejos'],
      answer: 2,
      explain: 'Una visera rayada o sucia dispersa la luz de los faros y te deslumbra. Mantenla limpia y cámbiala si está muy rayada; nunca uses visera oscura de noche.'
    },
    en: {
      q: 'You are riding at night. What most affects your ability to see the road?',
      options: ['The colour of the motorcycle', 'Having your helmet fastened', 'A scratched or dirty visor', 'Having both mirrors fitted'],
      answer: 2,
      explain: 'A scratched or dirty visor scatters headlight glare and dazzles you. Keep it clean, replace it if it is badly scratched, and never use a tinted visor at night.'
    }
  },

  // ───────────── vehiculo (2) ─────────────
  {
    id: 'q45', category: 'vehiculo', lesson: 'pre-trip-check',
    es: {
      q: '¿Qué revisión rápida conviene hacer antes de salir en moto?',
      options: ['Solo el nivel de gasolina', 'Llantas, frenos, luces y cadena', 'El color del casco', 'Nada, si la moto arrancó bien'],
      answer: 1,
      explain: 'Que la moto arranque no dice nada sobre los frenos o las llantas. Una revisión de un par de minutos de llantas, frenos, luces y cadena detecta problemas antes de que te sorprendan en la calle.'
    },
    en: {
      q: 'Which quick check is worth doing before you set off on a motorcycle?',
      options: ['Only the fuel level', 'Tyres, brakes, lights and chain', 'The colour of your helmet', 'Nothing, if the bike started fine'],
      answer: 1,
      explain: 'A bike that starts tells you nothing about its brakes or tyres. A two-minute check of tyres, brakes, lights and chain catches problems before they surprise you on the road.'
    }
  },
  {
    id: 'q46', category: 'vehiculo', lesson: 'pre-trip-check',
    es: {
      q: 'Notas que una llanta está lisa, casi sin dibujo. ¿Por qué es un problema?',
      options: ['Porque hace más ruido', 'Porque gasta más gasolina', 'Solo es un problema estético', 'Porque pierde agarre, sobre todo en mojado, y frena peor'],
      answer: 3,
      explain: 'El dibujo de la llanta saca el agua de debajo de ella. Una llanta lisa puede patinar con facilidad en una calle mojada y necesita más distancia para frenar.'
    },
    en: {
      q: 'You notice a tyre is bald, with almost no tread. Why is that a problem?',
      options: ['It makes more noise', 'It uses more fuel', 'It is only a cosmetic issue', 'It loses grip, especially when wet, and brakes worse'],
      answer: 3,
      explain: 'Tread channels water away from under the tyre. A bald tyre can easily slide on a wet road and needs more distance to stop.'
    }
  },

  // ───────────── alcohol (2) ─────────────
  {
    id: 'q47', category: 'alcohol', lesson: 'impaired-driving',
    es: {
      q: 'Tomaste unas cervezas en una fiesta. ¿Qué te ayuda de verdad a quedar en condiciones de manejar?',
      options: ['Tomar café bien cargado', 'Darte una ducha fría', 'Comer algo antes de salir', 'Nada de eso: solo el tiempo elimina el alcohol, así que busca otra forma de volver'],
      answer: 3,
      explain: 'El café, la ducha o la comida pueden hacerte sentir más despierto, pero no sacan el alcohol de tu cuerpo. Lo seguro es no manejar: pide a alguien sobrio que maneje, toma un taxi o quédate.'
    },
    en: {
      q: 'You had a few beers at a party. What actually makes you fit to drive?',
      options: ['Drinking strong coffee', 'Taking a cold shower', 'Eating something before you leave', 'None of these: only time removes alcohol, so find another way home'],
      answer: 3,
      explain: 'Coffee, a shower or food may make you feel more alert, but they do not remove alcohol from your body. The safe choice is not to drive: ask a sober driver, take a taxi or stay over.'
    }
  },
  {
    id: 'q48', category: 'alcohol', lesson: 'impaired-driving', fact: 'hn-ebriedad',
    es: {
      q: '¿Cómo trata la ley el manejar bajo los efectos del alcohol?',
      options: ['Como una infracción grave, con sanciones que pueden incluir suspender la licencia', 'Como una falta leve sin consecuencias', 'Solo se sanciona si hay un choque', 'No está regulado'],
      answer: 0,
      explain: 'Manejar bajo los efectos del alcohol es una infracción grave y también se sanciona bajo otra ley; entre las sanciones reportadas está la suspensión de la licencia. Más allá de la ley, el alcohol hace más lentas tus reacciones y empeora tu juicio.'
    },
    en: {
      q: 'How does the law treat driving under the influence of alcohol?',
      options: ['As a serious infraction, with penalties that can include licence suspension', 'As a minor offence with no consequences', 'It is only penalised if there is a crash', 'It is not regulated'],
      answer: 0,
      explain: 'Driving under the influence of alcohol is a serious infraction and is also sanctioned under a separate law; reported penalties include licence suspension. Beyond the law, alcohol slows your reactions and impairs your judgement.'
    }
  },

  // ───────────── emergencias (2) ─────────────
  {
    id: 'q49', category: 'emergencias', lesson: 'road-emergency', fact: 'hn-911',
    es: {
      q: '¿A qué número llamas para pedir ayuda de emergencia en Honduras?',
      options: ['911', '411', '119', '711'],
      answer: 0,
      explain: 'El 911 es el número nacional de emergencias en Honduras. Al llamar, di con calma dónde estás, qué pasó y cuántas personas están heridas.'
    },
    en: {
      q: 'Which number do you call for emergency help in Honduras?',
      options: ['911', '411', '119', '711'],
      answer: 0,
      explain: '911 is the national emergency number in Honduras. When you call, calmly say where you are, what happened and how many people are hurt.'
    }
  },
  {
    id: 'q50', category: 'emergencias', lesson: 'road-emergency',
    es: {
      q: 'Llegas primero a un choque de moto y el conductor está en el suelo con el casco puesto. ¿Qué haces?',
      options: ['Quitarle el casco enseguida para que respire mejor', 'Protegerte del tráfico, llamar al 911 y no moverlo ni quitarle el casco salvo que corra un peligro inmediato', 'Levantarlo y sentarlo en la acera', 'Darle agua'],
      answer: 1,
      explain: 'Mover a un herido o quitarle el casco puede agravar una lesión en el cuello o la columna. Primero asegura la escena para que nadie más resulte herido, llama al 911 y acompaña a la persona hasta que llegue ayuda.'
    },
    en: {
      q: 'You are first to arrive at a motorcycle crash and the rider is on the ground with their helmet on. What do you do?',
      options: ['Take their helmet off straight away so they can breathe', 'Protect yourself from traffic, call 911 and do not move them or remove the helmet unless they are in immediate danger', 'Lift them up and sit them on the pavement', 'Give them water'],
      answer: 1,
      explain: 'Moving an injured person or removing their helmet can make a neck or spine injury worse. First make the scene safe so nobody else gets hurt, call 911 and stay with the person until help arrives.'
    }
  }
];
