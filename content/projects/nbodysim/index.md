---
title: "NBody Simulation"
---

![Uh Oh!](/images/nbodysim.gif)

Nbody Simulation is a real-time point simulation written in C++ and CUDA

### Description
Simulates the gravitational effect different bodies would have on one another and displays them to the window using OpenGL. Can honestly generate
some pretty beautiful simulations, and while working on this project I found myself getting quite distracted just watching it, it can simulate many
thousands of points at a time and can even make use of CUDA to maintain a pretty good frame real-time.

Definitely room for improvement though, big one would be switching from array of structs to struct of arrays to allow for SIMD friendly compute on the CPU.
As well as throwing some compute shaders at it instead of using raw CUDA, as the point drawing for OpenGL is done CPU side, requiring memory to be copied back, I'm sure
theres a way to get the data to OpenGL without needing to copy it back up, that isn't as much of a pain as compute shaders, but I just haven't found myself invested enough
in this project to do it. Another point of improvement would be implementing the Barns Hut algorithm as it would take us down quite a bit in the land of the Big O, but it 
also makes heavy use of quad-trees, which again, I've yet to find the motivation to finish.

### How it Works
Makes use of physics of course, to compute the location of the body based on the effects of all the other bodies in the next time step. For how complicated physics can be,
this equation is pretty simple. Outside of that we call a renderer which takes the now updated points and their positions and draws them on the window for us to admire.