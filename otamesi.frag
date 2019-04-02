precision mediump float;
uniform float time;
uniform vec2 resolution;
uniform sampler2D backbuffer;

void main() {
	vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);
	float t = time * 0.7;
	p = p * p * 2.;

  float c = 0.;

  c += 0.01 / length(p -
    vec2(sin(t * 2.), cos(t * 1.))
    );

  c += 0.01 / length(p -
    vec2(sin(t*3.),tan(t *2.))
    );

    float d =0.0;

    d += 0.01/ length(p -
      vec2(cos(t),cos(time * 3.14))
      );

    d += 0.01 / length(p -
      vec2(cos(t),cos(t))
      );



  vec4 b = texture2D(backbuffer, gl_FragCoord.xy / resolution);

  gl_FragColor = c * vec4(0.2, 0.3, 0.8, 1) + (b  * 0.9) + d;


}
