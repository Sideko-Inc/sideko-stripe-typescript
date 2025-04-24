import {
  External$SetupIntentCreateBodyMandateDataObj0CustomerAcceptance,
  Schemas$SetupIntentCreateBodyMandateDataObj0CustomerAcceptance,
  SetupIntentCreateBodyMandateDataObj0CustomerAcceptance,
} from "./setup-intent-create-body-mandate-data-obj0-customer-acceptance";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBodyMandateDataObj0
 */
export type SetupIntentCreateBodyMandateDataObj0 = {
  customerAcceptance: SetupIntentCreateBodyMandateDataObj0CustomerAcceptance;
};

/**
 * @internal
 * SetupIntentCreateBodyMandateDataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyMandateDataObj0 = {
  customer_acceptance: External$SetupIntentCreateBodyMandateDataObj0CustomerAcceptance;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyMandateDataObj0
 */
const SchemaIn$SetupIntentCreateBodyMandateDataObj0: z.ZodType<
  SetupIntentCreateBodyMandateDataObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    customer_acceptance:
      Schemas$SetupIntentCreateBodyMandateDataObj0CustomerAcceptance.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer_acceptance: "customerAcceptance",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyMandateDataObj0
 */
const SchemaOut$SetupIntentCreateBodyMandateDataObj0: z.ZodType<
  External$SetupIntentCreateBodyMandateDataObj0, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyMandateDataObj0 // the object to be transformed
> = z
  .object({
    customerAcceptance:
      Schemas$SetupIntentCreateBodyMandateDataObj0CustomerAcceptance.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customerAcceptance: "customer_acceptance",
    });
  });

export const Schemas$SetupIntentCreateBodyMandateDataObj0 = {
  in: SchemaIn$SetupIntentCreateBodyMandateDataObj0,
  out: SchemaOut$SetupIntentCreateBodyMandateDataObj0,
};
