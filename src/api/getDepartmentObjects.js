const BASE = "/public/collection/v1";

export async function getDepartmentObjects(departmentId, limit = 10) {
  // 1. Get the IDs in this department
  const searchRes = await fetch(
    `${BASE}/search?departmentId=${departmentId}&hasImages=true&q=*`
  );

  if (!searchRes.ok) throw new Error(`HTTP ${searchRes.status}`);
  const searchData = await searchRes.json();

  const ids = (searchData.objectIDs || []).slice(0, limit);

  // 2. Fetch full details for each ID in parallel
  const artworks = await Promise.all(
    ids.map((id) =>
      fetch(`${BASE}/objects/${id}`).then((r) => r.json())
    )
  );
  const validArtworks= artworks.filter(obj => obj !== null && obj.primaryImage && obj.isPublicDomain);


  return validArtworks;
}

export default getDepartmentObjects;