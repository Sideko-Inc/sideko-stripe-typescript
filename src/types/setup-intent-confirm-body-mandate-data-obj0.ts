import {
  External$SetupIntentConfirmBodyMandateDataObj0CustomerAcceptance,
  Schemas$SetupIntentConfirmBodyMandateDataObj0CustomerAcceptance,
  SetupIntentConfirmBodyMandateDataObj0CustomerAcceptance,
} from "./setup-intent-confirm-body-mandate-data-obj0-customer-acceptance";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyMandateDataObj0
 */
export type SetupIntentConfirmBodyMandateDataObj0 = {
  customerAcceptance: SetupIntentConfirmBodyMandateDataObj0CustomerAcceptance;
};

/**
 * @internal
 * SetupIntentConfirmBodyMandateDataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyMandateDataObj0 = {
  customer_acceptance: External$SetupIntentConfirmBodyMandateDataObj0CustomerAcceptance;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyMandateDataObj0
 */
const SchemaIn$SetupIntentConfirmBodyMandateDataObj0: z.ZodType<
  SetupIntentConfirmBodyMandateDataObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    customer_acceptance:
      Schemas$SetupIntentConfirmBodyMandateDataObj0CustomerAcceptance.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer_acceptance: "customerAcceptance",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyMandateDataObj0
 */
const SchemaOut$SetupIntentConfirmBodyMandateDataObj0: z.ZodType<
  External$SetupIntentConfirmBodyMandateDataObj0, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyMandateDataObj0 // the object to be transformed
> = z
  .object({
    customerAcceptance:
      Schemas$SetupIntentConfirmBodyMandateDataObj0CustomerAcceptance.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customerAcceptance: "customer_acceptance",
    });
  });

export const Schemas$SetupIntentConfirmBodyMandateDataObj0 = {
  in: SchemaIn$SetupIntentConfirmBodyMandateDataObj0,
  out: SchemaOut$SetupIntentConfirmBodyMandateDataObj0,
};
