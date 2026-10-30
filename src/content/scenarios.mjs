// ROATÁN VIAL — interactive scenarios.
// Illustrative, typical situations on ordinary island roads. Not real events.

export default [
  {
    id: 'intersection-turning-vehicle',
    diagram: 'intersection-turn',
    related: ['intersections-turning', 'watch-for-motorcycles', 'moto-braking'],
    es: {
      title: 'El carro que espera para girar',
      situation: 'Imagina que vas en moto por la carretera principal a media tarde, a buen ritmo y en tu carril. Más adelante, un pick-up que viene de frente se detiene con la direccional puesta: quiere girar cruzando tu carril para entrar a una calle de tierra. El conductor mira hacia tu lado, pero no sabes si de verdad te vio.',
      prompt: '¿Qué haces al acercarte?',
      choices: [
        {
          text: 'Mantengo mi velocidad: yo voy recto y tengo el derecho de vía.',
          verdict: 'dangerous',
          feedback: 'Tener el derecho de vía no detiene a un vehículo que gira. A muchos conductores les cuesta ver una moto o calcular a qué velocidad viene, y pueden arrancar justo cuando llegas. Si eso pasa a tu velocidad normal, no tendrás espacio para frenar.'
        },
        {
          text: 'Pito y acelero para pasar antes de que se decida a girar.',
          verdict: 'dangerous',
          feedback: 'Acelerar reduce el tiempo que tienes para reaccionar y aumenta tu distancia de frenado justo en el punto de mayor riesgo. Si el conductor no oye el pito o lo interpreta mal, el choque sería más fuerte.'
        },
        {
          text: 'Suelto el acelerador, pongo los dedos sobre el freno y me preparo para detenerme si arranca.',
          verdict: 'safest',
          feedback: 'Reducir la velocidad y tener el freno preparado te da tiempo y espacio si el otro conductor decide girar. Asumir que quizá no te vio no es pesimismo: es la forma de llegar a casa aunque el otro se equivoque.'
        },
        {
          text: 'Me muevo hacia la orilla y sigo igual, para quedar lejos de él.',
          verdict: 'risky',
          feedback: 'Alejarte un poco puede ayudar, pero si sigues a la misma velocidad no ganas tiempo para frenar si el vehículo gira. Además, cerca de la orilla puede haber arena, hoyos o la entrada a la calle de tierra, justo donde él va a girar.'
        }
      ],
      takeaway: 'Cuando un vehículo espera para girar cruzando tu camino, reduce, prepara el freno y actúa como si no te hubiera visto.'
    },
    en: {
      title: 'The car waiting to turn',
      situation: 'Picture this: you are riding along the main road in the afternoon, at a steady pace in your own lane. Up ahead, an oncoming pick-up stops with its indicator on: it wants to turn across your lane into a dirt side road. The driver is looking your way, but you cannot be sure they have actually seen you.',
      prompt: 'What do you do as you approach?',
      choices: [
        {
          text: 'Keep my speed: I am going straight and I have the right of way.',
          verdict: 'dangerous',
          feedback: 'Having the right of way does not stop a turning vehicle. Many drivers find it hard to see a motorcycle or judge how fast it is coming, and may pull out just as you arrive. If that happens at your normal speed, you will have no room to stop.'
        },
        {
          text: 'Sound my horn and speed up to get past before they decide to turn.',
          verdict: 'dangerous',
          feedback: 'Speeding up shortens your time to react and lengthens your braking distance right at the point of greatest risk. If the driver does not hear the horn or misreads it, the crash would be harder.'
        },
        {
          text: 'Ease off the throttle, cover the brake and get ready to stop if they pull out.',
          verdict: 'safest',
          feedback: 'Slowing down with your brake ready gives you time and space if the other driver decides to turn. Assuming they may not have seen you is not pessimism: it is how you get home even when someone else makes a mistake.'
        },
        {
          text: 'Move towards the edge and carry on as before, to keep away from them.',
          verdict: 'risky',
          feedback: 'Moving over a little can help, but if you keep the same speed you gain no time to brake if the vehicle turns. The edge may also have sand, potholes or the entrance to the dirt road, exactly where they are about to turn.'
        }
      ],
      takeaway: 'When a vehicle is waiting to turn across your path, slow down, cover your brake and ride as if they have not seen you.'
    }
  },

  {
    id: 'weaving-motorcycle',
    diagram: null,
    related: ['watch-for-motorcycles', 'following-distance', 'calm-driving'],
    es: {
      title: 'La moto que zigzaguea',
      situation: 'Imagina que manejas tu carro por una calle con tráfico lento un viernes por la tarde. Delante de ti va una moto con el conductor y dos pasajeros. Se mete entre los carros, cambia de lado sin avisar y frena de golpe cada vez que encuentra un hueco.',
      prompt: '¿Cuál es la respuesta más segura?',
      choices: [
        {
          text: 'Dejo más distancia de lo normal, no intento rebasarla en espacios estrechos y estoy listo para frenar.',
          verdict: 'safest',
          feedback: 'Una moto sobrecargada y que zigzaguea puede perder el equilibrio o frenar sin aviso. Más espacio te da tiempo para reaccionar sin terminar encima de ellos. Tu calma protege a tres personas que van muy expuestas.'
        },
        {
          text: 'Me pego detrás para que no se me meta otra vez.',
          verdict: 'dangerous',
          feedback: 'Ir pegado elimina tu margen de frenado justo detrás de un vehículo impredecible. Si la moto frena o se cae, no tendrás forma de evitarla, y quienes saldrían más lastimados son sus pasajeros.'
        },
        {
          text: 'Le pito y le hago cambio de luces para que se aparte.',
          verdict: 'risky',
          feedback: 'El pito o las luces pueden asustar al conductor y provocar un movimiento brusco con tres personas encima. No vas a corregir su forma de manejar desde tu carro; lo que sí puedes controlar es tu distancia.'
        },
        {
          text: 'Acelero y la rebaso en cuanto vea un hueco, para dejarla atrás.',
          verdict: 'risky',
          feedback: 'Rebasar en tráfico lento y en un espacio estrecho te pone justo a su lado cuando puede cambiar de lado sin avisar. Si vas a rebasar, hazlo solo con espacio amplio y cuando su comportamiento sea predecible.'
        }
      ],
      takeaway: 'Ante un vehículo impredecible, el espacio es tu mejor protección y también la de ellos: deja distancia y no compitas.'
    },
    en: {
      title: 'The weaving motorcycle',
      situation: 'Picture this: you are driving your car along a road with slow Friday-afternoon traffic. Ahead of you is a motorcycle carrying the rider and two passengers. It squeezes between cars, switches sides without signalling and brakes hard every time it finds a gap.',
      prompt: 'What is the safest response?',
      choices: [
        {
          text: 'Leave more distance than usual, do not try to pass it in tight spaces, and stay ready to brake.',
          verdict: 'safest',
          feedback: 'An overloaded, weaving motorcycle can lose balance or brake without warning. More space gives you time to react without ending up on top of them. Your calm protects three people who are very exposed.'
        },
        {
          text: 'Stay right behind it so it cannot cut in front of me again.',
          verdict: 'dangerous',
          feedback: 'Following closely removes your braking margin right behind an unpredictable vehicle. If the motorcycle brakes or falls, you will have no way to avoid it, and its passengers would be the ones most badly hurt.'
        },
        {
          text: 'Sound my horn and flash my lights so it moves out of the way.',
          verdict: 'risky',
          feedback: 'A horn or flashing lights can startle the rider into a sudden movement with three people on board. You will not correct their riding from your car; what you can control is your distance.'
        },
        {
          text: 'Speed up and pass it as soon as I see a gap, to leave it behind.',
          verdict: 'risky',
          feedback: 'Passing in slow traffic and a tight space puts you right beside it just when it may switch sides without warning. If you do pass, do it only with plenty of room and when its movements are predictable.'
        }
      ],
      takeaway: 'Around an unpredictable vehicle, space is your best protection and theirs too: leave distance and do not compete.'
    }
  },

  {
    id: 'slow-vehicle-overtake',
    diagram: 'overtaking',
    related: ['safe-overtaking', 'road-markings', 'stopping-distance'],
    es: {
      title: 'Detrás del camión, antes de la curva',
      situation: 'Imagina que vas en tu carro detrás de un camión cargado de materiales que sube despacio por una carretera de cerros. Llevas varios minutos detrás de él y vas tarde. A unos cien metros hay una curva cerrada y no se ve lo que viene de frente. La línea del centro es continua.',
      prompt: '¿Rebasas?',
      choices: [
        {
          text: 'Sí: me pego al camión y salgo rápido para terminar antes de la curva.',
          verdict: 'dangerous',
          feedback: 'Pegado al camión no ves nada de lo que viene de frente, y un vehículo cargado es largo: rebasarlo toma más tiempo del que parece. Si aparece alguien en la curva, no habrá espacio para volver a tu carril.'
        },
        {
          text: 'Sí, si el conductor del camión me hace señas con la mano para que pase.',
          verdict: 'dangerous',
          feedback: 'Aunque la intención sea buena, el conductor del camión no puede garantizar lo que viene detrás de la curva. La decisión de rebasar es tuya, y aquí la curva y la línea continua dicen que no.'
        },
        {
          text: 'Me asomo un poco al carril contrario para ver si viene alguien y decido.',
          verdict: 'risky',
          feedback: 'Asomarte te pone medio cuerpo del carro en el carril contrario, justo antes de una curva sin visibilidad. Aunque no rebases, ya estás en el camino de quien venga de frente.'
        },
        {
          text: 'No: me quedo detrás, con buena distancia, y espero una recta despejada donde se permita rebasar.',
          verdict: 'safest',
          feedback: 'Con una curva cerrada y línea continua, no hay forma segura de rebasar. Quedarte atrás con distancia te deja ver mejor el camino y, cuando llegue una recta despejada, podrás rebasar con espacio de sobra. Unos minutos de retraso no valen el riesgo.'
        }
      ],
      takeaway: 'Si no puedes ver todo el espacio que necesitas para rebasar y volver a tu carril, no rebases.'
    },
    en: {
      title: 'Behind the truck, before the bend',
      situation: 'Picture this: you are driving behind a truck loaded with building materials as it climbs slowly along a hilly road. You have been stuck behind it for several minutes and you are running late. About a hundred metres ahead is a sharp bend, and you cannot see what is coming. The centre line is solid.',
      prompt: 'Do you overtake?',
      choices: [
        {
          text: 'Yes: I tuck in close behind the truck and pull out fast to finish before the bend.',
          verdict: 'dangerous',
          feedback: 'Right behind the truck you cannot see anything coming towards you, and a loaded truck is long: passing it takes longer than it seems. If someone comes round the bend, there will be no room to get back into your lane.'
        },
        {
          text: 'Yes, if the truck driver waves me past.',
          verdict: 'dangerous',
          feedback: 'However well meant, the truck driver cannot guarantee what is coming round the bend. The decision to overtake is yours, and here the bend and the solid line both say no.'
        },
        {
          text: 'I edge partly into the opposite lane to see if anything is coming, then decide.',
          verdict: 'risky',
          feedback: 'Edging out puts half your car in the opposite lane just before a blind bend. Even if you do not overtake, you are already in the path of anyone coming the other way.'
        },
        {
          text: 'No: I stay behind at a good distance and wait for a clear straight where overtaking is allowed.',
          verdict: 'safest',
          feedback: 'With a sharp bend and a solid line, there is no safe way to overtake. Staying back at a distance gives you a better view of the road, and when a clear straight comes you can pass with plenty of room. A few minutes’ delay is not worth the risk.'
        }
      ],
      takeaway: 'If you cannot see all the space you need to overtake and get back into your lane, do not overtake.'
    }
  },

  {
    id: 'night-no-reflective',
    diagram: 'night-visibility',
    related: ['night-visibility', 'pre-trip-check', 'helmet-fit'],
    es: {
      title: 'De noche y sin reflectivo',
      situation: 'Imagina que sales del trabajo a las 8 de la noche y te toca volver en moto por una carretera con poca iluminación. Llevas camisa oscura, jeans y un casco negro con la visera algo rayada. No llevas nada reflectivo.',
      prompt: '¿Qué combinación de cambios mejora más tu visibilidad y la de los demás?',
      choices: [
        {
          text: 'Ir más rápido para pasar menos tiempo en la carretera oscura.',
          verdict: 'dangerous',
          feedback: 'De noche ves menos y los demás te ven tarde; a más velocidad, ese poco tiempo para reaccionar se convierte en nada. Llegar unos minutos antes no compensa el riesgo.'
        },
        {
          text: 'Ponerte chaleco o distintivo reflectivo (y que tu pasajero también), revisar que funcionen la luz delantera y la trasera, y limpiar o cambiar la visera rayada.',
          verdict: 'safest',
          feedback: 'El reflectivo devuelve la luz de los faros y hace que te vean desde mucho más lejos; desde la reforma de 2026 es obligatorio para conductor y pasajero entre las 6:00 p.m. y las 6:00 a.m. Las luces funcionando y una visera limpia te ayudan a ver y a ser visto. Juntos, estos cambios atacan el problema desde todos los lados.'
        },
        {
          text: 'Llevar siempre la luz alta encendida, aunque venga alguien de frente.',
          verdict: 'risky',
          feedback: 'La luz alta te ayuda a ver en tramos vacíos, pero si no la bajas deslumbras a los que vienen de frente, que por unos segundos no verán nada, ni siquiera a ti. Además, no resuelve que desde atrás te vean.'
        },
        {
          text: 'Cambiar a una camisa clara, pero sin reflectivo ni revisar las luces.',
          verdict: 'risky',
          feedback: 'La ropa clara ayuda un poco, pero el reflectivo se ve mucho antes cuando le dan los faros. Sin revisar las luces, puedes estar manejando sin luz trasera sin saberlo, y además la ley pide el reflectivo en ese horario.'
        }
      ],
      takeaway: 'De noche, combina reflectivo, luces funcionando y una visera limpia: ser visible no depende de una sola cosa.'
    },
    en: {
      title: 'At night with no reflective gear',
      situation: 'Picture this: you finish work at 8 p.m. and need to ride home on a poorly lit road. You are wearing a dark shirt, jeans and a black helmet with a slightly scratched visor. You have nothing reflective on.',
      prompt: 'Which combination of changes does most to help you see and be seen?',
      choices: [
        {
          text: 'Ride faster so you spend less time on the dark road.',
          verdict: 'dangerous',
          feedback: 'At night you see less and others see you late; at higher speed, that short reaction time shrinks to nothing. Arriving a few minutes earlier does not make up for the risk.'
        },
        {
          text: 'Put on a reflective vest or marking (and make sure your passenger does too), check that your front and rear lights work, and clean or replace the scratched visor.',
          verdict: 'safest',
          feedback: 'Reflective material bounces headlight beams back and gets you seen from much further away; since the 2026 reform it is required for riders and passengers between 6:00 p.m. and 6:00 a.m. Working lights and a clean visor help you see and be seen. Together, these changes tackle the problem from every side.'
        },
        {
          text: 'Keep your high beam on all the time, even when someone is coming towards you.',
          verdict: 'risky',
          feedback: 'High beam helps you see on empty stretches, but if you do not dip it you dazzle oncoming drivers, who for a few seconds will see nothing, including you. It also does nothing to make you visible from behind.'
        },
        {
          text: 'Change into a light-coloured shirt, but skip the reflective gear and the light check.',
          verdict: 'risky',
          feedback: 'Light clothing helps a little, but reflective material shows up far sooner in headlights. Without checking your lights, you may be riding without a working rear light and not know it, and the law requires reflective gear at that hour.'
        }
      ],
      takeaway: 'At night, combine reflective gear, working lights and a clean visor: being visible never depends on just one thing.'
    }
  },

  {
    id: 'rain-starts',
    diagram: null,
    related: ['rain-riding', 'following-distance', 'moto-braking'],
    es: {
      title: 'Empieza a llover',
      situation: 'Imagina que vas en moto por la carretera principal después de un día seco y caluroso. De repente empieza un aguacero. En pocos segundos el asfalto brilla, la visera se llena de gotas y adelante hay una bajada con una curva y un paso peatonal pintado.',
      prompt: '¿Qué haces?',
      choices: [
        {
          text: 'Acelero para llegar antes de que llueva más fuerte.',
          verdict: 'dangerous',
          feedback: 'Los primeros minutos de lluvia son de los más resbalosos, porque el agua levanta el aceite y el polvo acumulados. Ir más rápido en ese momento alarga tu frenado y hace más probable que la moto patine en la curva.'
        },
        {
          text: 'Freno fuerte en cuanto empiezan a caer las gotas.',
          verdict: 'risky',
          feedback: 'Reducir la velocidad es correcto, pero un frenazo brusco sobre asfalto que se acaba de mojar puede bloquear una rueda. Lo seguro es soltar el acelerador y frenar de forma suave y progresiva.'
        },
        {
          text: 'Suelto el acelerador con suavidad, aumento la distancia con el de adelante, freno con la moto derecha antes de la curva y cruzo la pintura sin frenar ni acelerar fuerte.',
          verdict: 'safest',
          feedback: 'Con menos agarre, todo debe ser más suave y con más margen: menos velocidad, más distancia y frenadas progresivas hechas antes de inclinar la moto. La pintura y las tapas metálicas resbalan mucho en mojado, así que se cruzan derechos y sin movimientos bruscos. Si la lluvia no te deja ver, detente en un lugar seguro y espera.'
        },
        {
          text: 'Me pego al carro de adelante para seguir sus luces y su camino.',
          verdict: 'dangerous',
          feedback: 'En mojado necesitas más distancia para frenar, no menos. Si el carro frena de golpe, no tendrás espacio, y el agua que levantan sus llantas te quitará aún más visibilidad.'
        }
      ],
      takeaway: 'Cuando empieza a llover, todo más suave y con más espacio: menos velocidad, más distancia y frenadas progresivas con la moto derecha.'
    },
    en: {
      title: 'Rain starts to fall',
      situation: 'Picture this: you are riding along the main road after a hot, dry day. Suddenly a downpour starts. Within seconds the asphalt is shining, your visor is covered in drops, and ahead there is a downhill bend and a painted pedestrian crossing.',
      prompt: 'What do you do?',
      choices: [
        {
          text: 'Speed up to get there before the rain gets heavier.',
          verdict: 'dangerous',
          feedback: 'The first minutes of rain are among the most slippery, because the water lifts accumulated oil and dust. Going faster at that moment lengthens your braking distance and makes it more likely the bike will slide on the bend.'
        },
        {
          text: 'Brake hard as soon as the first drops fall.',
          verdict: 'risky',
          feedback: 'Slowing down is right, but sudden hard braking on freshly wet asphalt can lock a wheel. The safe way is to ease off the throttle and brake smoothly and progressively.'
        },
        {
          text: 'Ease off the throttle gently, increase the gap to the vehicle ahead, brake with the bike upright before the bend, and cross the paint without hard braking or acceleration.',
          verdict: 'safest',
          feedback: 'With less grip, everything should be smoother and with more margin: lower speed, more distance and progressive braking done before you lean the bike. Paint and metal covers are very slippery when wet, so cross them upright and without sudden movements. If the rain is too heavy to see, stop somewhere safe and wait.'
        },
        {
          text: 'Stay close behind the car ahead to follow its lights and its line.',
          verdict: 'dangerous',
          feedback: 'On a wet road you need more distance to stop, not less. If the car brakes suddenly you will have no room, and the spray from its tyres will cut your visibility even further.'
        }
      ],
      takeaway: 'When rain starts, make everything smoother and leave more space: lower speed, more distance and progressive braking with the bike upright.'
    }
  },

  {
    id: 'friends-racing',
    diagram: 'group-riding',
    related: ['group-riding', 'stunts-wheelies', 'calm-driving'],
    es: {
      title: 'La invitación a echar un pique',
      situation: 'Imagina que es sábado en la noche y estás con tus amigos en una gasolinera, todos en moto. Alguien propone echar un pique por la carretera principal hasta la siguiente comunidad: “Es rápido, a esta hora no hay nadie”. Varios ya están encendiendo las motos y te miran para ver si te apuntas.',
      prompt: '¿Qué haces?',
      choices: [
        {
          text: 'Digo que no me apunto al pique, y propongo que vayamos juntos a un ritmo tranquilo o que nos quedemos ahí.',
          verdict: 'safest',
          feedback: 'Un pique en la vía pública pone en riesgo no solo a quienes corren, sino a cualquiera que salga de una calle, camine por la orilla o venga de frente. Decir que no frente a los amigos cuesta, pero ofrecer otro plan facilita que otros también se bajen. Manejar con cabeza es algo de lo que se puede estar orgulloso.'
        },
        {
          text: 'Voy con ellos, pero me quedo atrás sin competir.',
          verdict: 'risky',
          feedback: 'Aunque no compitas, vas en medio de motos a alta velocidad, de noche, y es fácil dejarse llevar por el ritmo del grupo. Si alguien se cae delante de ti, no tendrás espacio para evitarlo.'
        },
        {
          text: 'Me apunto, pero solo hasta la primera curva.',
          verdict: 'dangerous',
          feedback: 'La parte más peligrosa de un pique es justo la salida y la velocidad que se toma en las rectas antes de las curvas. “Solo un tramo” sigue siendo correr en una vía pública, de noche, donde no puedes saber quién viene.'
        },
        {
          text: 'Me apunto: a esa hora casi no hay tráfico y conozco bien la carretera.',
          verdict: 'dangerous',
          feedback: '“No hay nadie” es una suposición: de noche puede haber peatones, ciclistas o vehículos sin luces que no ves hasta que es tarde. Conocer la carretera no cambia la distancia que necesitas para frenar a alta velocidad.'
        }
      ],
      takeaway: 'Los piques no son para la vía pública: decir que no, y ofrecer otro plan, protege a tus amigos y a todos los que usan esa carretera.'
    },
    en: {
      title: 'The invitation to race',
      situation: 'Picture this: it is Saturday night and you are with your friends at a petrol station, all on motorcycles. Someone suggests a race (“echar un pique”) along the main road to the next community: “It’s quick, there’s nobody out at this hour.” Several of them are already starting their bikes and looking at you to see if you are in.',
      prompt: 'What do you do?',
      choices: [
        {
          text: 'Say I am not joining the race, and suggest we ride together at an easy pace or just stay where we are.',
          verdict: 'safest',
          feedback: 'A race on a public road puts at risk not only the racers but anyone pulling out of a side road, walking along the edge or coming the other way. Saying no in front of friends is hard, but offering another plan makes it easier for others to back out too. Riding with a clear head is something to be proud of.'
        },
        {
          text: 'Go with them, but stay at the back without competing.',
          verdict: 'risky',
          feedback: 'Even if you do not compete, you are riding among motorcycles at high speed, at night, and it is easy to get pulled along by the group’s pace. If someone falls in front of you, you will have no room to avoid them.'
        },
        {
          text: 'Join in, but only as far as the first bend.',
          verdict: 'dangerous',
          feedback: 'The most dangerous parts of a race are the start and the speed built up on the straights before the bends. “Just one stretch” is still racing on a public road, at night, where you cannot know who is coming.'
        },
        {
          text: 'Join in: there is hardly any traffic at that hour and I know the road well.',
          verdict: 'dangerous',
          feedback: '“Nobody is out” is an assumption: at night there may be pedestrians, cyclists or unlit vehicles you do not see until it is too late. Knowing the road does not change the distance you need to stop at high speed.'
        }
      ],
      takeaway: 'Races do not belong on public roads: saying no, and offering another plan, protects your friends and everyone else using that road.'
    }
  }
];
