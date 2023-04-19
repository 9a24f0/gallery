<script lang="ts">
  import { T, Canvas } from '@threlte/core';
  import { OrbitControls, GLTF } from '@threlte/extras';
  import { base } from '$app/paths';
</script>

<Canvas rendererParameters={{ antialias: true }}>

  <T.PerspectiveCamera makeDefault fov={60} position={[5, 10, 45]} >
    <OrbitControls enableDamping maxPolarAngle={1.4} minPolarAngle={0.5}/>
  </T.PerspectiveCamera>

  <GLTF
    url="{base}/models/house-on-the-hill.glb">
  </GLTF>
</Canvas>