let container = document.getElementById("cnt");
let content = document.createElement("div");
content.innerHTML = `<h1 class="has-text-centered">Shark Bait</h1>
<br />
<p>During a research experiment a marine biologist placed a shark into a large holding tank and then released
    several small bait fish into the tank.</p>
<p>As you would expect, the shark quickly swam around the tank, attacked and ate the smaller fish. The marine biologist
    then inserted a strong piece of clear fiberglass into the tank, creating two separate partitions. She then put the
    shark on one side of the fiberglass and a new set of bait fish on the other. Again, the shark quickly attacked.</p>
<p>This time, however, the shark slammed into the fiberglass divider and bounced off. Undeterred, the shark kept repeating this
    behavior every few minutes to no avail. Meanwhile, the bait fish swam around unharmed in the second partition.
    Eventually, about an hour into the experiment, the shark gave up.</p>
<p>This experiment was repeated several dozen times overthe next few weeks. Each time, the shark got less aggressive and made fewer
    attempts to attack the bait fish, untileventually the shark got tired of hitting the fiberglass divider and simply stopped attacking 
    altogether. The marinebiologist then removed the fiberglass divider, but the shark didn’t attack. </p>
<p>The shark was trained to believe a barrier existed between it and the bait fish, 
    so the bait fish swam wherever they wished, free from harm.</p>`
container.appendChild(content); 
