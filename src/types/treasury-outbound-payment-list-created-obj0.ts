import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryOutboundPaymentListCreatedObj0
 */
export type TreasuryOutboundPaymentListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * TreasuryOutboundPaymentListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryOutboundPaymentListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryOutboundPaymentListCreatedObj0
 */
const SchemaIn$TreasuryOutboundPaymentListCreatedObj0: z.ZodType<
  TreasuryOutboundPaymentListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    gt: z.number().int().optional(),
    gte: z.number().int().optional(),
    lt: z.number().int().optional(),
    lte: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      gt: "gt",
      gte: "gte",
      lt: "lt",
      lte: "lte",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryOutboundPaymentListCreatedObj0
 */
const SchemaOut$TreasuryOutboundPaymentListCreatedObj0: z.ZodType<
  External$TreasuryOutboundPaymentListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  TreasuryOutboundPaymentListCreatedObj0 // the object to be transformed
> = z
  .object({
    gt: z.number().int().optional(),
    gte: z.number().int().optional(),
    lt: z.number().int().optional(),
    lte: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      gt: "gt",
      gte: "gte",
      lt: "lt",
      lte: "lte",
    });
  });

export const Schemas$TreasuryOutboundPaymentListCreatedObj0 = {
  in: SchemaIn$TreasuryOutboundPaymentListCreatedObj0,
  out: SchemaOut$TreasuryOutboundPaymentListCreatedObj0,
};
