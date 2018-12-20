let container = document.getElementById("cnt");
let content = document.createElement("div");
content.innerHTML = `<h1 class="has-text-centered">A Pound of Butter</h1>
<br/>
<p> Once, there was a farmer who regularly sold butter to a baker. One day, the baker decided to weigh
        the butter to see if he was getting the exact amount that he asked for. </p>
<p>He found out that he wasn’t, so he took the
        farmer to court. The judge asked the farmer if he uses any measure to weigh the butter. The farmer replied, “Your
        Honor, I’m primitive. I don’t have a proper measure, but I do have a scale.”</p>
<p>The judge replied, “Then how do you weigh the butter?” The farmer replied; “Your Honor, long before the baker started
        buying butter from me, I have been buying a pound loaf of bread from him.</p>
<p>Every day, when the baker brings the bread, Iput it on the scale and give him the same weight in butter. 
        If anyone is to be blamed, it’s the baker.”</p>`
container.appendChild(content); 
