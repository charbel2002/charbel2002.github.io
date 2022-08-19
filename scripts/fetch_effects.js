

    let fetch_effects = async () => {

        let effects = await fetch('database/db.json');

        let effects_set = await effects.json();

        effects_set.forEach(effect => {

            let effectNode = document.createElement('div');
                effectNode.className = "effect-node";

                effectNode.innerHTML = `
                
                    <div class="effect-title text-title">${effect.name}</div>
                    <div class="effect-type text-cursive">${effect.type}</div>
                    <div class="effect-image"><img src="${effect.imagelink}"></div>
                    <div class="effect-link"> <a href="${effect.link}" class="effect-button-blue text-cursive"> Voir &rarr; </a> </div>
                
                `;

            document.getElementById('integration-effects').appendChild(effectNode);
            
        });

    }

    fetch_effects();