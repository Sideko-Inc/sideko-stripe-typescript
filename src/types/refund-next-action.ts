import {
  External$RefundNextActionDisplayDetails,
  RefundNextActionDisplayDetails,
  Schemas$RefundNextActionDisplayDetails,
} from "./refund-next-action-display-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type RefundNextAction = {
  displayDetails?: RefundNextActionDisplayDetails | undefined;
  /**
   * Type of the next action to perform.
   */
  type: string;
};

/**
 * @internal
 * RefundNextAction without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RefundNextAction = {
  display_details?: External$RefundNextActionDisplayDetails | undefined;
  type: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RefundNextAction
 */
const SchemaIn$RefundNextAction: z.ZodType<
  RefundNextAction, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_details: Schemas$RefundNextActionDisplayDetails.in.optional(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_details: "displayDetails",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RefundNextAction
 */
const SchemaOut$RefundNextAction: z.ZodType<
  External$RefundNextAction, // output type of this zod object
  z.ZodTypeDef,
  RefundNextAction // the object to be transformed
> = z
  .object({
    displayDetails: Schemas$RefundNextActionDisplayDetails.out.optional(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayDetails: "display_details",
      type: "type",
    });
  });

export const Schemas$RefundNextAction = {
  in: SchemaIn$RefundNextAction,
  out: SchemaOut$RefundNextAction,
};
