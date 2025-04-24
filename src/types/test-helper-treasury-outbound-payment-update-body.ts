import {
  External$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails,
  Schemas$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails,
  TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails,
} from "./test-helper-treasury-outbound-payment-update-body-tracking-details";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperTreasuryOutboundPaymentUpdateBody
 */
export type TestHelperTreasuryOutboundPaymentUpdateBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Details about network-specific tracking information.
   */
  trackingDetails: TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TestHelperTreasuryOutboundPaymentUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperTreasuryOutboundPaymentUpdateBody = {
  expand?: string[] | undefined;
  tracking_details: External$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails;

  [additionalProperty: string]:
    | (string[] | undefined)
    | External$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails
    | External$TestHelperTreasuryOutboundPaymentUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperTreasuryOutboundPaymentUpdateBody
 */
const SchemaIn$TestHelperTreasuryOutboundPaymentUpdateBody: z.ZodType<
  TestHelperTreasuryOutboundPaymentUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    tracking_details:
      Schemas$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperTreasuryOutboundPaymentUpdateBody
 */
const SchemaOut$TestHelperTreasuryOutboundPaymentUpdateBody: z.ZodType<
  External$TestHelperTreasuryOutboundPaymentUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  TestHelperTreasuryOutboundPaymentUpdateBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    trackingDetails:
      Schemas$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails.out,
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      trackingDetails: "tracking_details",
    });
  });

export const Schemas$TestHelperTreasuryOutboundPaymentUpdateBody = {
  in: SchemaIn$TestHelperTreasuryOutboundPaymentUpdateBody,
  out: SchemaOut$TestHelperTreasuryOutboundPaymentUpdateBody,
};
