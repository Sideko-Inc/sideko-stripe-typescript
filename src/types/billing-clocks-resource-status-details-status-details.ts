import {
  BillingClocksResourceStatusDetailsAdvancingStatusDetails,
  External$BillingClocksResourceStatusDetailsAdvancingStatusDetails,
  Schemas$BillingClocksResourceStatusDetailsAdvancingStatusDetails,
} from "./billing-clocks-resource-status-details-advancing-status-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingClocksResourceStatusDetailsStatusDetails = {
  advancing?:
    | BillingClocksResourceStatusDetailsAdvancingStatusDetails
    | undefined;
};

/**
 * @internal
 * BillingClocksResourceStatusDetailsStatusDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingClocksResourceStatusDetailsStatusDetails = {
  advancing?:
    | External$BillingClocksResourceStatusDetailsAdvancingStatusDetails
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingClocksResourceStatusDetailsStatusDetails
 */
const SchemaIn$BillingClocksResourceStatusDetailsStatusDetails: z.ZodType<
  BillingClocksResourceStatusDetailsStatusDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    advancing:
      Schemas$BillingClocksResourceStatusDetailsAdvancingStatusDetails.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      advancing: "advancing",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingClocksResourceStatusDetailsStatusDetails
 */
const SchemaOut$BillingClocksResourceStatusDetailsStatusDetails: z.ZodType<
  External$BillingClocksResourceStatusDetailsStatusDetails, // output type of this zod object
  z.ZodTypeDef,
  BillingClocksResourceStatusDetailsStatusDetails // the object to be transformed
> = z
  .object({
    advancing:
      Schemas$BillingClocksResourceStatusDetailsAdvancingStatusDetails.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      advancing: "advancing",
    });
  });

export const Schemas$BillingClocksResourceStatusDetailsStatusDetails = {
  in: SchemaIn$BillingClocksResourceStatusDetailsStatusDetails,
  out: SchemaOut$BillingClocksResourceStatusDetailsStatusDetails,
};
