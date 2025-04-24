import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * When you enable this parameter, this SetupIntent accepts payment methods that you enable in the Dashboard and that are compatible with its other parameters.
 */
export type SetupIntentCreateBodyAutomaticPaymentMethods = {
  allowRedirects?: ("always" | "never") | undefined;
  enabled: boolean;
};

/**
 * @internal
 * SetupIntentCreateBodyAutomaticPaymentMethods without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyAutomaticPaymentMethods = {
  allow_redirects?: ("always" | "never") | undefined;
  enabled: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyAutomaticPaymentMethods
 */
const SchemaIn$SetupIntentCreateBodyAutomaticPaymentMethods: z.ZodType<
  SetupIntentCreateBodyAutomaticPaymentMethods, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    allow_redirects: z.enum(["always", "never"]).optional(),
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allow_redirects: "allowRedirects",
      enabled: "enabled",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyAutomaticPaymentMethods
 */
const SchemaOut$SetupIntentCreateBodyAutomaticPaymentMethods: z.ZodType<
  External$SetupIntentCreateBodyAutomaticPaymentMethods, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyAutomaticPaymentMethods // the object to be transformed
> = z
  .object({
    allowRedirects: z.enum(["always", "never"]).optional(),
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allowRedirects: "allow_redirects",
      enabled: "enabled",
    });
  });

export const Schemas$SetupIntentCreateBodyAutomaticPaymentMethods = {
  in: SchemaIn$SetupIntentCreateBodyAutomaticPaymentMethods,
  out: SchemaOut$SetupIntentCreateBodyAutomaticPaymentMethods,
};
