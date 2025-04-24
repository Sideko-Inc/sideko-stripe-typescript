import {
  External$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetails,
  Schemas$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetails,
  TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetails,
} from "./test-helper-treasury-outbound-transfer-update-body-tracking-details";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperTreasuryOutboundTransferUpdateBody
 */
export type TestHelperTreasuryOutboundTransferUpdateBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Details about network-specific tracking information.
   */
  trackingDetails: TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetails;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetails
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TestHelperTreasuryOutboundTransferUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperTreasuryOutboundTransferUpdateBody = {
  expand?: string[] | undefined;
  tracking_details: External$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetails;

  [additionalProperty: string]:
    | (string[] | undefined)
    | External$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetails
    | External$TestHelperTreasuryOutboundTransferUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperTreasuryOutboundTransferUpdateBody
 */
const SchemaIn$TestHelperTreasuryOutboundTransferUpdateBody: z.ZodType<
  TestHelperTreasuryOutboundTransferUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    tracking_details:
      Schemas$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetails.in,
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      tracking_details: "trackingDetails",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperTreasuryOutboundTransferUpdateBody
 */
const SchemaOut$TestHelperTreasuryOutboundTransferUpdateBody: z.ZodType<
  External$TestHelperTreasuryOutboundTransferUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  TestHelperTreasuryOutboundTransferUpdateBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    trackingDetails:
      Schemas$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetails.out,
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      trackingDetails: "tracking_details",
    });
  });

export const Schemas$TestHelperTreasuryOutboundTransferUpdateBody = {
  in: SchemaIn$TestHelperTreasuryOutboundTransferUpdateBody,
  out: SchemaOut$TestHelperTreasuryOutboundTransferUpdateBody,
};
