import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountNetworks
 */
export type SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountNetworks = {
  requested?: ("ach" | "us_domestic_wire")[] | undefined;
};

/**
 * @internal
 * SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountNetworks without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountNetworks =
  {
    requested?: ("ach" | "us_domestic_wire")[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountNetworks
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountNetworks: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountNetworks, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    requested: z.array(z.enum(["ach", "us_domestic_wire"])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountNetworks
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountNetworks: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountNetworks, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountNetworks // the object to be transformed
> = z
  .object({
    requested: z.array(z.enum(["ach", "us_domestic_wire"])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountNetworks =
  {
    in: SchemaIn$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountNetworks,
    out: SchemaOut$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountNetworks,
  };
