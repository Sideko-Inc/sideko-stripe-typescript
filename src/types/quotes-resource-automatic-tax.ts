import {
  ConnectAccountReference,
  External$ConnectAccountReference,
  Schemas$ConnectAccountReference,
} from "./connect-account-reference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type QuotesResourceAutomaticTax = {
  /**
   * Automatically calculate taxes
   */
  enabled: boolean;
  liability?: ConnectAccountReference | undefined;
  /**
   * The status of the most recent automated tax calculation for this quote.
   */
  status?:
    | ("complete" | "failed" | "requires_location_inputs")
    | null
    | undefined;
};

/**
 * @internal
 * QuotesResourceAutomaticTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuotesResourceAutomaticTax = {
  enabled: boolean;
  liability?: External$ConnectAccountReference | undefined;
  status?:
    | ("complete" | "failed" | "requires_location_inputs")
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuotesResourceAutomaticTax
 */
const SchemaIn$QuotesResourceAutomaticTax: z.ZodType<
  QuotesResourceAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    liability: z.lazy(() => Schemas$ConnectAccountReference.in.optional()),
    status: z
      .enum(["complete", "failed", "requires_location_inputs"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuotesResourceAutomaticTax
 */
const SchemaOut$QuotesResourceAutomaticTax: z.ZodType<
  External$QuotesResourceAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  QuotesResourceAutomaticTax // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    liability: z.lazy(() => Schemas$ConnectAccountReference.out.optional()),
    status: z
      .enum(["complete", "failed", "requires_location_inputs"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
      status: "status",
    });
  });

export const Schemas$QuotesResourceAutomaticTax = {
  in: SchemaIn$QuotesResourceAutomaticTax,
  out: SchemaOut$QuotesResourceAutomaticTax,
};
