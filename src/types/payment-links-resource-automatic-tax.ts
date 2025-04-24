import {
  ConnectAccountReference,
  External$ConnectAccountReference,
  Schemas$ConnectAccountReference,
} from "./connect-account-reference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentLinksResourceAutomaticTax = {
  /**
   * If `true`, tax will be calculated automatically using the customer's location.
   */
  enabled: boolean;
  liability?: ConnectAccountReference | undefined;
};

/**
 * @internal
 * PaymentLinksResourceAutomaticTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinksResourceAutomaticTax = {
  enabled: boolean;
  liability?: External$ConnectAccountReference | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinksResourceAutomaticTax
 */
const SchemaIn$PaymentLinksResourceAutomaticTax: z.ZodType<
  PaymentLinksResourceAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    liability: z.lazy(() => Schemas$ConnectAccountReference.in.optional()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinksResourceAutomaticTax
 */
const SchemaOut$PaymentLinksResourceAutomaticTax: z.ZodType<
  External$PaymentLinksResourceAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinksResourceAutomaticTax // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    liability: z.lazy(() => Schemas$ConnectAccountReference.out.optional()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

export const Schemas$PaymentLinksResourceAutomaticTax = {
  in: SchemaIn$PaymentLinksResourceAutomaticTax,
  out: SchemaOut$PaymentLinksResourceAutomaticTax,
};
