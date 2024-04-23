import type { components, paths } from "@/types/book-freight/schema";

type Hazard = components["schemas"]["HazardousMaterial"];

function getHazard(items: EnrichedOrder): Hazard | undefined {
    const packingGroup = items.enrichedItems[0].additionalData[0].freightClass.packingGroup
    if (items.enrichedItems[0].additionalData[0].freightClass.hazardId)
      {
      return { 
        hazmatId: items.enrichedItems[0].additionalData[0].freightClass.hazardId,
        packingGroup: getPackingGroup(packingGroup) as PackingGroup,
      }
    } else {
      return undefined;
    }
  }
  