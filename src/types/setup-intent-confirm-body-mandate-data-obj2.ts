import {
  External$SetupIntentConfirmBodyMandateDataObj2CustomerAcceptance,
  Schemas$SetupIntentConfirmBodyMandateDataObj2CustomerAcceptance,
  SetupIntentConfirmBodyMandateDataObj2CustomerAcceptance,
} from "./setup-intent-confirm-body-mandate-data-obj2-customer-acceptance";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * This hash contains details about the Mandate to create
 */
export type SetupIntentConfirmBodyMandateDataObj2 = {
  customerAcceptance: SetupIntentConfirmBodyMandateDataObj2CustomerAcceptance;
};

/**
 * @internal
 * SetupIntentConfirmBodyMandateDataObj2 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyMandateDataObj2 = {
  customer_acceptance: External$SetupIntentConfirmBodyMandateDataObj2CustomerAcceptance;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyMandateDataObj2
 */
const SchemaIn$SetupIntentConfirmBodyMandateDataObj2: z.ZodType<
  SetupIntentConfirmBodyMandateDataObj2, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    customer_acceptance:
      Schemas$SetupIntentConfirmBodyMandateDataObj2CustomerAcceptance.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer_acceptance: "customerAcceptance",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyMandateDataObj2
 */
const SchemaOut$SetupIntentConfirmBodyMandateDataObj2: z.ZodType<
  External$SetupIntentConfirmBodyMandateDataObj2, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyMandateDataObj2 // the object to be transformed
> = z
  .object({
    customerAcceptance:
      Schemas$SetupIntentConfirmBodyMandateDataObj2CustomerAcceptance.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customerAcceptance: "customer_acceptance",
    });
  });

export const Schemas$SetupIntentConfirmBodyMandateDataObj2 = {
  in: SchemaIn$SetupIntentConfirmBodyMandateDataObj2,
  out: SchemaOut$SetupIntentConfirmBodyMandateDataObj2,
};
