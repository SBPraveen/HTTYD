function createElement(containerNum,name,image,description1,description2){
    const box1 = document.querySelector(".box1");
    const box2 = document.querySelector(".box3");
    const containerDiv = document.createElement("div");
    containerDiv.classList.add('container1');
    const heading = document.createElement('h1');
    heading.innerText = name;
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('imgContainer');
    const img = document.createElement('img');
    img.classList.add("img");
    img.src = image;
    imageContainer.appendChild(img);
    const p1 = document.createElement('p');
    p1.innerText = description1; 
    const p2 = document.createElement('p');
    p2.innerText = description2;
    containerDiv.appendChild(heading); 
    containerDiv.appendChild(imageContainer); 
    containerDiv.appendChild(p1); 
    containerDiv.appendChild(p2); 
    if(containerNum === 1){
        box1.appendChild(containerDiv);
    }
    else{
        box2.appendChild(containerDiv);
    }
//image animation
    imageContainer.addEventListener('mousemove',(e)=>{
        let xAxis = (window.innerWidth/2 - e.clientX)/10;
        let yAxis = (window.innerHeight/2 - e.clientY)/10;
        img.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        
    });
    imageContainer.addEventListener("mouseout", (e)=>{
        let xAxis = 0;
        let yAxis = 0;
        img.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
}

//Adding Characters
createElement(1,"HICCUP","hiccup.jpg",`Hiccup, now 20, is the tenacious, spirited son of Stoick the Vast, chieftain of Berk. No longer a runt, but still lanky by comparison, Hiccup is the island’s ace flier and resident dragon expert.`,`Celebrated as a hometown hero for ushering in an era of peace between Vikings and dragons, Hiccup now prefers to spend his time exploring uncharted lands and discovering new dragons with the help of his trusty Night Fury, Toothless. However, Stoick’s plan to pass down the mantle of Chief to his son has Hiccup fleeing in the opposite direction, for fear of becoming his father and losing sight of himself. But as the call of adventure draws Hiccup deep into lands unknown, his search for identity will be answered in ways he could never have dreamed.`);
createElement(1,"TOOTHLESS","toothless.png",`Once thought of as the "unholy offspring of lightning and death itself", Toothless (20 in dragon years) has proven to be much more of a giant, winged pussycat than the stuff of nightmares.
Playful, inquisitive, and intelligent, Toothless is more Hiccup's best friend than his pet.`,`He is extremely protective of his Viking soul mate, and will stop at nothing to guard him from all harm. As the last known specimen of the Night Fury species, Toothless is indisputably special. He commands respect from dragons and humans alike.
Toothless also possesses an echolocation sense not unlike radar or sonar. When flying through dark or cramped environments, Toothless issues a plasma blast in all directions. When the plasma bounces off the nearby terrain and returns to Toothless, it gives him an incredibly accurate reading of his surroundings.`);
createElement(1,`DRAGO`,`drago.jpg`,`Drago Bludvist is the main antagonist of How to Train Your Dragon 2. He is a cruel, ruthless, twisted man whose main goal is to conquer the world with his enormous army of both humans and dragons, he is feared by all and destroys anyone who gets in his way.Drago is a force of nature. The self-proclaimed “Dragon God,” Drago is equal parts madman and military genius.`,`Drago’s unnerving mystique chills the hearts of the bravest Vikings – even Stoick the Vast. Daunting in size and demeanor, Drago has no tolerance for those who disagree with him.`);
createElement(1,`DRAGO'S BEWILDERBEAST`,`dragoDragon.png`,`Found as a hatchling during one of Drago Bludvist’s earliest conquests, this particular Bewilderbeast suffered the misfortune of being raised by a madman.`,`Unlike Hiccup or Valka’s warm and empathic approach with dragons, Drago routinely abused his Bewilderbeast to cull out any perceived weakness and to establish a blind loyalty to the self-proclaimed “Dragon God.” What emerged from this torturous crucible was Drago’s perfect secret weapon: A vicious Bewilderbeast that has known nothing but hatred and a single goal… to end the reign of Valka’s alpha Bewilderbeast once and for all.`);
createElement(`2`,`ASTRID`,`astrid.jpg`,`Astrid, 20, is the self-assured, competitive champion of the Dragon Races and Hiccup’s longtime girlfriend. Beautiful despite herself, she’s tough and rational, providing Hiccup with a blunt voice of reason while remaining his most outspoken supporter.`,`A strong sense of duty defines Astrid to the core. She will always do what must be done without regard for herself. So when trouble threatens the people and dragons she loves, Astrid stops at nothing to defend them, even though it means going rogue and defying Stoick’s orders.`);
createElement(`2`,`STORMFLY`,`stormfly.png`,`Although she preens and grooms herself like the most fastidious of birds, Stormfly actually possesses a playful spirit.`,`Whether it's winning dragon races with Astrid or fetching shiny objects, Stormfly is as game for a fun time as she is deadly in battle!`);
createElement(`2`,`STOICK`,`stoick.jpg`,`Stoick, 50, is the mythic and mighty Chieftain of Berk – a great, shaggy mountain of a man whose conquests have become the stuff of Viking legend.`,`A reformed dragon fighter, Stoick’s job as protector of the people is decidedly lighter since Hiccup ushered in an era of peace. Boastful and gregarious, Stoick is now the proudest father in Berk, forever singing Hiccup’s praises, even as his absentee son is off mapping the world instead of showing up for work. But when Stoick’s plan to retire and anoint Hiccup chief is disrupted by rumblings of a terrible foe’s return, Stoick wastes no time in breaking out the old armor and charging off to defend what is his.`);
createElement(`2`,`SKULLCRUSHER`,`skullCrusher.jpg`,`From the Rumblehorn species, Skullcrusher is part of a previously undiscovered class -- tracker class, being that he's the bloodhound of dragons.`,`He can find anything on scent, like when he found Hiccup in Valka's nest based only on Hiccup's lost helmet. Skullcrusher looks like a truffle pig mixed with a rhino, but much bigger. He has the chitinous green-red iridescent coloring and surfacing of a scarab beetle and keeps his battle axe-shaped muzzle in the dirt, sniffing things out.`);
createElement(`2`,`VALKA`,`valka.jpg`,`Valka is Hiccup's long-lost mother and Stoick's wife who was abducted in a dragon attack twenty years ago.`,`Always an advocate of peace between dragons and Vikings, Valka has since lived among dragons, learned their ways, discovered their secrets, and become their fierce protector. She is strong and uncompromising, but at her core still possesses the overwhelming love of a wife and mother`);
createElement(`2`,`CLOUDJUMPER`,`cloudJumper.jpg`,`The owl-like Cloudjumper has been Valka's companion of choice for flying and rescuing other dragons over the last twenty years. Cloudjumper's pride, confidence, and large size lead him to think of himself as the top dragon in Valka's mountain fortress, second only to the Bewilderbeast, who is the king of all dragons in the nest.`,`Due to their two decades of experience together, Cloudjumper and Valka share a wordless shorthand when flying. Whereas other dragon riders need to call out commands to turn or shoot, Cloudjumper instinctively knows when Valka wants him to move or attack, adding to their combined mystique and prowess in battle.`);
createElement(`2`,`LIGHT FURY`,`lightFury.png`,`The Light Fury moves as fast as Toothless and shares his ability to blend into the sky – even during daylight hours.`,`With her white coloration, the Light Fury hides seamlessly in clouds, sea fog, and distant horizons. Although skittish and skeptical, the Light Fury also shares Toothless' deep sense of empathy and will always wield her plasma blast to defend any in need.`);



