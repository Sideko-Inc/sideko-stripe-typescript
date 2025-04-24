import {
  AccountSessionsCreateBodyComponentsPaymentDetailsFeatures,
  External$AccountSessionsCreateBodyComponentsPaymentDetailsFeatures,
  Schemas$AccountSessionsCreateBodyComponentsPaymentDetailsFeatures,
} from "./account-sessions-create-body-components-payment-details-features";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountSessionsCreateBodyComponentsPaymentDetails
 */
export type AccountSessionsCreateBodyComponentsPaymentDetails = {
  enabled: boolean;
  features?:
    | AccountSessionsCreateBodyComponentsPaymentDetailsFeatures
    | undefined;
};

/**
 * @internal
 * AccountSessionsCreateBodyComponentsPaymentDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountSessionsCreateBodyComponentsPaymentDetails = {
  enabled: boolean;
  features?:
    | External$AccountSessionsCreateBodyComponentsPaymentDetailsFeatures
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountSessionsCreateBodyComponentsPaymentDetails
 */
const SchemaIn$AccountSessionsCreateBodyComponentsPaymentDetails: z.ZodType<
  AccountSessionsCreateBodyComponentsPaymentDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    features:
      Schemas$AccountSessionsCreateBodyComponentsPaymentDetailsFeatures.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountSessionsCreateBodyComponentsPaymentDetails
 */
const SchemaOut$AccountSessionsCreateBodyComponentsPaymentDetails: z.ZodType<
  External$AccountSessionsCreateBodyComponentsPaymentDetails, // output type of this zod object
  z.ZodTypeDef,
  AccountSessionsCreateBodyComponentsPaymentDetails // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    features:
      Schemas$AccountSessionsCreateBodyComponentsPaymentDetailsFeatures.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

export const Schemas$AccountSessionsCreateBodyComponentsPaymentDetails = {
  in: SchemaIn$AccountSessionsCreateBodyComponentsPaymentDetails,
  out: SchemaOut$AccountSessionsCreateBodyComponentsPaymentDetails,
};
