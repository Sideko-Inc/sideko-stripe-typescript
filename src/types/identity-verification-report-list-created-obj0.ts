import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IdentityVerificationReportListCreatedObj0
 */
export type IdentityVerificationReportListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * IdentityVerificationReportListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IdentityVerificationReportListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IdentityVerificationReportListCreatedObj0
 */
const SchemaIn$IdentityVerificationReportListCreatedObj0: z.ZodType<
  IdentityVerificationReportListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IdentityVerificationReportListCreatedObj0
 */
const SchemaOut$IdentityVerificationReportListCreatedObj0: z.ZodType<
  External$IdentityVerificationReportListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  IdentityVerificationReportListCreatedObj0 // the object to be transformed
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

export const Schemas$IdentityVerificationReportListCreatedObj0 = {
  in: SchemaIn$IdentityVerificationReportListCreatedObj0,
  out: SchemaOut$IdentityVerificationReportListCreatedObj0,
};
