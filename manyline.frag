precision mediump float;
uniform float time;
uniform vec2 resolution;

void main() {

  vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min (resolution.x,resolution.y);
  float l_x = 0.01 * length(sin(time) / p.x);
  float l_y = 0.01 * length(sin(time) / p.y);

  float x = (p.x * p.x + p.y * p.y - 0.002);
  gl_FragColor = vec4( vec3( sin(x * 50000000.0 )) , 0.5);

}
