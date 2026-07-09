/**
 * WebGL Shaders for background animation
 */

export const vertexShader = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

export const fragmentShader = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
varying vec2 v_texCoord;

void main() {
    vec2 uv = v_texCoord;
    vec2 grid = fract(uv * 40.0 + u_time * 0.05);
    float gridLine = smoothstep(0.0, 0.05, grid.x) * smoothstep(1.0, 0.95, grid.x) *
                     smoothstep(0.0, 0.05, grid.y) * smoothstep(1.0, 0.95, grid.y);
    
    float pulse = sin(uv.x * 10.0 - u_time * 2.0) * cos(uv.y * 10.0 + u_time);
    pulse = smoothstep(0.9, 1.0, pulse);
    
    vec3 baseColor = vec3(0.02, 0.02, 0.02);
    vec3 gridColor = vec3(0.1, 0.2, 0.05);
    vec3 pulseColor = vec3(0.64, 0.9, 0.21);
    
    vec3 finalColor = mix(baseColor, gridColor, gridLine * 0.3);
    finalColor += pulseColor * pulse * 0.4;
    
    gl_FragColor = vec4(finalColor, 1.0);
}`;
