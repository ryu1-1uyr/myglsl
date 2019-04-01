#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));

float dist_func(vec3 pos, float size)
{
    return length(pos) - size;
}

vec3 getNormal(vec3 pos, float size)
{
    float ep = 0.0001;
    return normalize(vec3(
            dist_func(pos, size) - dist_func(vec3(pos.x - ep, pos.y, pos.z), size),
            dist_func(pos, size) - dist_func(vec3(pos.x, pos.y - ep, pos.z), size),
            dist_func(pos, size) - dist_func(vec3(pos.x, pos.y, pos.z - ep), size)
        ));
}

void main( void )
{
    // 解像度からテクスチャとして利用できる`-1～1`の間に正規化する
    vec2 pos = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);

    vec3 col = vec3(0.0);

    vec3 cameraPos = vec3(0.0, 0.0, 10.0);

    vec3 ray = normalize(vec3(pos, 0.0) - cameraPos);
    vec3 cur = cameraPos;

    vec2 mouseNorm = mouse * 2.0 - 1.0;
    float size = 1.0 - length(mouseNorm);
    for (int i = 0; i < 16; i++)
    {
        float d = dist_func(cur, size);
        if (d < 0.0001)
        {
            vec3 normal = getNormal(cur, size);
            float diff = dot(normal, lightDir);
            col = vec3(diff) + vec3(0.1);
            break;
        }
        cur += ray * d;
    }

    gl_FragColor = vec4(col, 1.0);
}
