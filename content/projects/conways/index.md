---
title: "Conways Game of Life"
---

The famous Game of Life written in C# for Unity

### Description
Contains not just Conways Game of Life but many other variations, things like highlife, and von neumann 
neighborhood, which are decently well-known, and also has variations like infection, in which green cells
can infect white cells, causing them to spread rapidly, and a battle mode, where red and blue battle on even 
footing, as well as my personal favorite, wireworld, a turring-complete electrical wire simulation, quite a 
joy to watch.

### How it Works
Probably the coolest part about this (at least to me) is that it's all ran on a single texture using a compute
shader, written in hlsl. Now while this is probably an obvious solution to this problem for many, this project 
was the first time I truly got into GPU programming. As such it went through many iterations as I improved as 
a coder and I got to watch as my creation got faster and faster, able to simulate around 151 MILLION points at 
50 fps on my 2060 Super, a graphics card that came out in 2019.
