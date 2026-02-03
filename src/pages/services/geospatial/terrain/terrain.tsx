import '../geo.css';
export function Terrain() {
  return (
    <div className="ServicePage">
      <div className="ServiceHero">
        TERRAIN ANALYSIS
        <br />& MAPPING
      </div>
      <div>
        Nanosat delivers high-accuracy terrain analysis and mapping services using
        LiDAR and elevation data to support planning, engineering, hydrology,
        and environmental assessment. Our terrain products provide a reliable
        foundation for understanding landform behaviour, water movement, and
        development constraints.
        <img src="/terrain.avif" alt="terrain" />
        What We Do
        <ul>
          <li>LiDAR processing and elevation modelling</li>
          <li>Digital Terrain Models (DTM) and Digital Surface Models (DSM)</li>
          <li>Contour generation (high-resolution and engineering-grade)</li>
          <li>Slope, aspect, and landform analysis</li>
          <li>Flow direction and accumulation modelling</li>
          <li>Terrain correction and QA</li>
          <li>Integration with hydrological and infrastructure models</li>
        </ul>
        Deliverables Clients receive:
        <ul>
          <li>Digital Terrain Models (DTM) and Surface Models (DSM)</li>
          <li>Contours at required intervals</li>
          <li>Terrain derivatives (slope, aspect, flow paths)</li>
          <li>GIS-ready datasets and map outputs</li>
          <li>Metadata and quality documentation</li>
        </ul>
      </div>
    </div>
  );
}
