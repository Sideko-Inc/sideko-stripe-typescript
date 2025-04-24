import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountNetworks
 */
export type SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountNetworks = {
  requested?: ("ach" | "us_domestic_wire")[] | undefined;
};

/**
 * @internal
 * SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountNetworks without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountNetworks =
  {
    requested?: ("ach" | "us_domestic_wire")[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountNetworks
 */
const SchemaIn$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountNetworks: z.ZodType<
  SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountNetworks, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountNetworks
 */
const SchemaOut$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountNetworks: z.ZodType<
  External$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountNetworks, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountNetworks // the object to be transformed
> = z
  .object({
    requested: z.array(z.enum(["ach", "us_domestic_wire"])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountNetworks =
  {
    in: SchemaIn$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountNetworks,
    out: SchemaOut$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountNetworks,
  };
